import { onClickOutside } from '@vueuse/core';
import type { Ref } from 'vue';

function onClickOutsideLauncher(element: Ref, launchId: string, callBack: Function): void {
    onClickOutside(element, (e: PointerEvent) => {
        const target = e.target as HTMLElement;
        if (target.dataset.launches && target.dataset.launches.includes(launchId)) return;
        callBack();
    });
}

export { onClickOutsideLauncher };
