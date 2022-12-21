<template>
    <ul class="entry-list">
        <li
            v-for="entry in entryList"
            :key="entry.id"
            :entry="entry"
            class="entry-list-item link-hover-to-secondary"
        >
            <RouterLink :to="{ name: Routes.BLOG_ENTRY, params: { id: entry.id } }">
                <h3 class="header">{{ entry.title }}</h3>
                <span class="details"
                    >{{ entry.published }}<i class="bi bi-dot"></i
                    ><span class="author">By {{ entry.author }}</span></span
                >
                <p class="body">
                    {{ entry.body }}
                </p>
            </RouterLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useBlogDataStore, type BlogEntry } from '../../stores/BlogDataStore';
    import { RouterLink } from 'vue-router';
    import { Routes } from '../../router/Router';

    const entryList = ref<BlogEntry[]>();
    const blogData = useBlogDataStore();

    blogData.getAll().then((data: BlogEntry[]) => (entryList.value = data));
</script>

<style scoped lang="scss">
    @use '../../scss/common/variables/colors';
    @use '../../scss/common/variables/layout';

    .entry-list {
        list-style: none;
        padding: 0;
        .entry-list-item {
            border-bottom: 1px dotted colors.$secondary;
            margin-bottom: 1rem;

            &:last-child {
                border-bottom: none;
            }

            &:hover {
                .details {
                    color: colors.$secondary;
                }
            }
            .header {
                margin-bottom: 0.2rem;
            }

            .details {
                display: block;
                margin-bottom: 0.5rem;
                font-size: 0.9rem;
                font-weight: 700;
                color: colors.$primary;
                .author {
                    font-weight: 400;
                }
            }

            .body {
                line-height: layout.$default-line-height;
                max-height: layout.$default-line-height * 2;
                -webkit-box-orient: vertical;
                display: block;
                display: -webkit-box;
                overflow: hidden !important;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
            }
        }
    }
</style>
