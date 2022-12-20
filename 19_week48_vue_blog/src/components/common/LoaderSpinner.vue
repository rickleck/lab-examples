<template>
    <Teleport to="body">
        <div class="loader__spinner" :class="{ show: show }">
            <svg viewBox="0 0 50 50">
                <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
            </svg>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const props = defineProps<{ delay: number }>();
    const show = ref<boolean>(false);

    setTimeout(() => {
        show.value = true;
    }, props.delay);
</script>
