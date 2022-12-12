import { useRoute, useRouter } from 'vue-router';
import { Routes } from '@/router/enum/Routes';

function pageNotFound(): void {
    const router = useRouter();
    const route = useRoute();

    router.push({
        name: Routes.NOT_FOUND,
        params: {
            pathMatch: route.path.substring(1).split('/'),
        },
        query: route.query,
        hash: route.hash,
    });
}

export { pageNotFound };
