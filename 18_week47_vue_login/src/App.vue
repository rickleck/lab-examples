<template>
    <SiteNavigation />
    <UserLogin v-if="UserStore.displayLogin" />
    <main>
        <PageIndex />
    </main>
    <SiteFooter />
</template>

<script setup lang="ts">
    import SiteNavigation from '@/components/navigation/SiteNavigation.vue';
    import PageIndex from '@/components/pages/PageIndex.vue';
    import SiteFooter from '@/components/footer/SiteFooter.vue';
    import UserLogin from '@/components/user/UserLogin.vue';
    import { UserStore } from '@/stores/UserStore';
</script>

<style lang="scss">
    @use '@/scss/common/variables/layout';
    main {
        padding-top: layout.$navigation-height;
    }
</style>
