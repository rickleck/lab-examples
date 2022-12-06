<template>
    <article class="entry-view view-padding">
        <div class="page-grid">
            <aside><HomeButton /></aside>
            <header class="header">
                <h1 class="title">{{ entry.title }}</h1>
                <p class="details">
                    {{ entry.published }}
                    <i class="bi bi-dot"></i>
                    <span class="author"> By {{ entry.author }}</span>
                </p>
            </header>
        </div>
        <div v-if="entry.img_src" class="image">
            <img :src="entry.img_src" />
        </div>

        <div class="page-grid">
            <aside></aside>
            <p class="pody">
                {{ entry.body }}
            </p>
        </div>
    </article>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { apiStore, type BlogEntry } from '../stores/ApiStore';
    import HomeButton from '../components/common/HomeButton.vue';
    import { useRoute, useRouter } from 'vue-router';

    const props = defineProps<{ id: string }>();
    const entry = ref<BlogEntry>(<BlogEntry>{});
    const router = useRouter();
    const route = useRoute();

    apiStore
        .get(props.id)
        .then((data: BlogEntry[] | BlogEntry) => (entry.value = data as BlogEntry))
        .catch((error: any) => {
            console.log('EntryVuew', error);
            pageNotFound();
        });

    /**
     *
     */
    function pageNotFound(): void {
        router.push({
            name: 'NotFound',
            params: { pathMatch: route.path.substring(1).split('/') },
            query: route.query,
            hash: route.hash,
        });
    }
</script>

<style scoped lang="scss">
    @use '../scss/common/variables/layout';
    @use '../scss/common/utils/breakpoints';
    @use '../scss/common/variables/colors';
    .entry-view {
        padding-top: layout.$default-spacing;
        padding-bottom: layout.$view-padding-bottom;
        white-space: pre-wrap;
        .header {
            padding-top: 4rem;
            .title {
                font-size: 2rem;
                line-height: 1.9rem;
                margin-bottom: 0.6rem;

                @include breakpoints.from-md() {
                    font-size: 3rem;
                    line-height: 2.9rem;
                }
            }

            .details {
                color: colors.$primary;
                font-weight: 700;
                margin-bottom: 1.5rem;

                .author {
                    font-weight: 400;
                }
            }
        }
        .image {
            display: block;
            margin-left: layout.$default-spacing * -1;
            margin-right: layout.$default-spacing * -1;
            margin-bottom: layout.$default-spacing;

            @include breakpoints.from-md() {
                margin-bottom: layout.$default-spacing * 1.5;
            }

            img {
                display: block;
                width: 100%;
                object-fit: cover;
                aspect-ratio: 1;

                @include breakpoints.from-lg() {
                    aspect-ratio: 16 / 9;
                }
            }
        }
        .body {
            white-space: pre-wrap;
        }
    }
</style>
