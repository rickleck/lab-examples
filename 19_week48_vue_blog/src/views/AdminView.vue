<template>
    <div class="admin-view view-padding">
        <header class="admin-header page-grid">
            <div><HomeButton /></div>
            <div class="wrapper">
                <h1 class="page-title">Admin</h1>
                <p class="error-msg">{{ admin.errorMsg }}</p>
                <button @click="logout" class="btn-primary btn-logout">Log Out</button>
            </div>
        </header>
        <div class="page-grid">
            <aside class="aside">
                <button
                    @click="transitionKey++, displayCreate()"
                    class="btn-primary btn-create"
                    :disabled="mode === 'create'"
                >
                    <span>Create Entry</span> <i class="bi bi-plus-circle"></i>
                </button>
                <EntryListAdmin
                    :entry-list="entryList"
                    :current-entry="currentEntry"
                    @item-selected="onListItemSelected"
                />
            </aside>

            <Transition name="fade" mode="out-in">
                <div class="entry-edit" :key="transitionKey">
                    <h2 class="edit-header" v-if="mode === 'create'">Create Entry</h2>
                    <h2 class="edit-header" v-else>Edit Entry</h2>

                    <form class="form" @submit.prevent="saveEntry">
                        <div class="form-control">
                            <label class="label" for="published">Publish date</label>
                            <input
                                v-model="published"
                                class="input-text input-published"
                                type="date"
                                name="published"
                                id="published"
                                :max="today"
                                required
                            />
                        </div>
                        <div class="form-control">
                            <label class="label" for="author">Author</label>
                            <input
                                v-model="author"
                                class="input-text"
                                type="text"
                                name="author"
                                id="author"
                                required
                            />
                        </div>
                        <div class="form-control">
                            <label class="label" for="title">Title</label>
                            <input
                                v-model="title"
                                class="input-text input-title"
                                type="text"
                                name="title"
                                id="title"
                                required
                            />
                        </div>
                        <div class="form-control">
                            <label class="label" for="body">Body</label>
                            <textarea
                                v-model="body"
                                class="input-text input-body"
                                name="body"
                                id="body"
                                required
                            >
                            </textarea>
                        </div>
                        <img v-if="validImgSrc" :src="validImgSrc" class="entry-image" />
                        <div class="form-control">
                            <label class="label" for="image">image Url</label>
                            <input
                                v-model="imgSrc"
                                class="input-text"
                                type="text"
                                name="image"
                                id="image"
                                placeholder="http..."
                            />
                        </div>

                        <div class="form-btns">
                            <input
                                type="submit"
                                class="btn-primary btn-form"
                                value="Save"
                                :disabled="!entryChanged"
                            />
                            <button
                                v-if="mode === 'edit'"
                                @click.prevent="deleteEntry"
                                class="btn-primary btn-form"
                            >
                                Delete
                            </button>
                        </div>
                    </form>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed, watch } from 'vue';
    import { sanitize } from 'dompurify';
    import HomeButton from '../components/common/HomeButton.vue';
    import EntryListAdmin from '../components/entry/EntryListAdmin.vue';
    import { useAdminStore } from '../stores/AdminStore';
    import { useRouter } from 'vue-router';
    import { Routes } from '../router/Router';
    import {
        useBlogDataStore,
        type BlogEntry,
        type BlogEntryUpdate,
    } from '../stores/BlogDataStore';

    type Mode = 'edit' | 'create';

    const entryList = ref<BlogEntry[]>([]);
    const title = ref<string>('');
    const author = ref<string>('');
    const published = ref<string>('');
    const body = ref<string>('');
    const imgSrc = ref<string>('');
    const mode = ref<Mode>('edit');
    const currentEntry = ref<BlogEntry>();
    const entryChanged = ref<boolean>(false);
    const transitionKey = ref<number>(0);
    const admin = useAdminStore();
    const router = useRouter();
    const blogData = useBlogDataStore();
    let watchCounter = 0;

    const today = computed<string>(() => {
        const isoDate = new Date().toISOString();
        return isoDate.substring(0, isoDate.indexOf('T'));
    });

    const validImgSrc = computed<string>(() =>
        imgSrc.value.match(/^https?:\/\/.+\/.+$/) ? imgSrc.value : ''
    );

    watch([published, title, author, body, imgSrc], () => {
        if (watchCounter >= 1) {
            entryChanged.value = true;
        }
        watchCounter++;
    });

    refreshData();

    /**
     *
     */
    function displayCreate(): void {
        resetWatch();
        mode.value = 'create';
        currentEntry.value = undefined;
        resetForm();
        window.scrollTo(0, 0);
    }

    /**
     *
     */
    function displayEdit(entry: BlogEntry): void {
        window.scrollTo(0, 0);
        resetWatch();
        mode.value = 'edit';
        currentEntry.value = entry;
        populateForm(entry);
    }

    function onListItemSelected(entry: BlogEntry) {
        transitionKey.value++;
        displayEdit(entry);
    }

    /**
     *
     */
    function populateForm(entry: BlogEntry): void {
        title.value = entry.title;
        author.value = entry.author;
        published.value = entry.published;
        body.value = entry.body;
        imgSrc.value = entry.img_src || '';
    }

    /**
     *
     */
    function resetForm(): void {
        title.value = '';
        author.value = 'Admin';
        published.value = today.value;
        body.value = '';
        imgSrc.value = '';
    }

    /**
     *
     */
    function resetWatch(): void {
        entryChanged.value = false;
        watchCounter = 0;
    }

    /**
     *
     */
    function saveEntry(): void {
        const props = <BlogEntryUpdate>{
            title: sanitize(title.value),
            author: sanitize(author.value),
            published: sanitize(published.value),
            body: sanitize(body.value),
            img_src: sanitize(validImgSrc.value),
        };

        if (mode.value === 'create') {
            blogData.addItem(props).then((id: string | undefined) => entryModified(id));
        } else if (mode.value === 'edit') {
            if (currentEntry.value)
                blogData
                    .updateItem(currentEntry.value.id, props)
                    .then((id: string | undefined) => entryModified(id));
        }
    }

    /**
     *
     */
    function deleteEntry(): void {
        if (currentEntry.value)
            blogData.deleteItem(currentEntry.value.id).then(() => entryModified());
    }

    /**
     *
     */
    function entryModified(id?: string): void {
        transitionKey.value++;
        refreshData(id);
    }

    /**
     *
     */
    function refreshData(id?: string): void {
        blogData
            .getAll()
            .then((entries: BlogEntry[]) => {
                entryList.value = entries;
                const index = id ? entries.findIndex((e: BlogEntry) => e.id === id) : 0;
                displayEdit(entries[Math.max(index, 0)]);
            })
            .catch((error: any) => console.log(error));
    }
    /**
     *
     */
    function logout(): void {
        admin.logout().then(() => {
            router.push({ name: Routes.INDEX });
        });
    }
</script>

<style scoped lang="scss">
    @use '../scss/common/variables/colors';
    @use '../scss/common/variables/layout';
    @use '../scss/common/utils/breakpoints';
    .admin-view {
        padding-bottom: layout.$view-padding-bottom;
        .aside {
            padding-right: layout.$default-spacing;

            .btn-home {
                margin-bottom: 4.2rem;
            }
            .btn-create {
                display: flex;
                gap: 0.7rem;
                font-size: 1.3rem;

                @include breakpoints.from-lg() {
                    font-size: 1rem;
                }
            }
        }

        .admin-header {
            margin-bottom: 2rem;
            @include breakpoints.from-lg() {
                margin-bottom: 1rem;
            }

            .wrapper {
                display: flex;
                align-items: center;
                margin-top: 2rem;

                @include breakpoints.from-lg() {
                    margin-top: 0;
                }

                .page-title {
                    margin: 0;
                }

                .error-msg {
                    flex: 1;
                    margin: 0;
                    padding-right: 1rem;
                    text-align: right;
                }
                .btn-logout {
                    align-self: flex-end;
                }
            }
        }

        .entry-edit {
            .edit-header {
                margin-bottom: 0.7rem;
                color: colors.$primary;

                @include breakpoints.from-lg() {
                    margin-bottom: 1.4rem;
                }
            }
            .form {
                margin-bottom: 2rem;
                .form-control {
                    .input-title {
                        font-weight: 700;
                    }

                    .input-body {
                        height: 35vh;
                        resize: none;
                        font-size: inherit;
                        font-family: inherit;
                        border: none;
                    }

                    .input-published {
                        width: auto;
                    }
                }

                .entry-image {
                    display: block;
                    margin-top: 0.5rem;
                    max-width: 100%;
                    object-fit: cover;
                    aspect-ratio: 16 / 9;
                }

                .form-btns {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                    .btn-form {
                        font-size: 1.3rem;
                        @include breakpoints.from-lg() {
                            font-size: 1rem;
                        }
                    }
                }
            }
        }
    }
</style>
