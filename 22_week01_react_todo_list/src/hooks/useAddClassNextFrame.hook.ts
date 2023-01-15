import { RefObject, useEffect } from 'react';

function useAddClassNextFrame(
    nodeRef: RefObject<HTMLElement | null>,
    className: string,
    dependency: boolean = true
): void {
    useEffect(() => {
        let ignore = false;
        if (nodeRef.current && dependency) {
            requestAnimationFrame(() => {
                if (nodeRef.current && !ignore) nodeRef.current.classList.add(className);
            });
        }

        return () => {
            ignore = true;
        };
    }, [nodeRef.current, dependency]);
}

export { useAddClassNextFrame };
