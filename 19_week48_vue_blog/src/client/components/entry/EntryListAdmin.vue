<template>
    <select class="entry-select input-text" v-model="selectedEntry">
        <option disabled value="default">Edit entry...</option>
        <option v-for="entry in entryList" :value="entry">
            {{ entry.published + ' ' + entry.title }}
        </option>
    </select>

    <ul class="entry-list">
        <li
            v-for="entry in entryList"
            :key="entry._id"
            :entry="entry"
            @click="selectedEntry = entry"
            :class="{ 'is-selected': entry === selectedEntry }"
            class="list-item link link-hover-to-secondary"
        >
            <a>
                <span class="published">{{ entry.published }}</span>
                <span class="title">{{ entry.title }}</span>
            </a>
        </li>
    </ul>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import type { BlogEntry } from '../../stores/ApiStore';

    const props = defineProps<{ entryList: BlogEntry[]; currentEntry: BlogEntry | undefined }>();
    const emit = defineEmits<{
        (e: 'item-selected', entry: BlogEntry): void;
    }>();

    const selectedEntry = computed({
        get: () => (props.currentEntry ? props.currentEntry : 'default'),
        set: (entry) => emit('item-selected', entry as BlogEntry),
    });
</script>

<style scoped lang="scss">
    @use '../../scss/common/variables/colors';
    @use '../../scss/common/utils/breakpoints';

    .entry-select {
        width: 100%;
        font-size: inherit;
        font-family: inherit;
        padding: 0.5rem;
        margin-top: 1rem;
        margin-bottom: 2rem;

        @include breakpoints.from-lg() {
            display: none;
        }
    }

    .entry-list {
        list-style: none;
        padding: 0;
        margin-top: 2rem;

        @include breakpoints.to-lg() {
            display: none;
        }
        .list-item {
            margin-bottom: 0.2rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px dotted colors.$primary;

            &:hover {
                .published {
                    color: colors.$secondary;
                }
            }

            .published {
                font-size: 0.8rem;
                color: colors.$secondary-dark;
            }

            .title {
                display: block;
                font-weight: 700;
                width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            &.is-selected {
                color: colors.$primary-light;
                .published {
                    color: colors.$primary-light;
                }
            }
        }
    }
</style>
