import { onClickOutside } from '@vueuse/core';
import type { Ref } from 'vue';

function onClickOutsideLauncher(element: Ref, launches: string, callBack: Function) {
    onClickOutside(element, (e: PointerEvent) => {
        const target = e.target as HTMLElement;
        if (target.dataset.launches && target.dataset.launches.includes(launches)) return;
        callBack();
    });
}

export { onClickOutsideLauncher };
