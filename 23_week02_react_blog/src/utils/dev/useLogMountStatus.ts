import { useEffect } from 'react';

function useLogMountStatus(descriptor: string) {
    useEffect(() => {
        console.log('%c' + descriptor + ' - mounted', 'color: green');

        return () => {
            console.log('%c' + descriptor + ' - unmounted', 'color: red');
        };
    }, []);
}

export { useLogMountStatus };
