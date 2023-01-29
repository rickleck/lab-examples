import { useAppSelector } from '@/app/storeHooks';
import { useEffect } from 'react';

function useStatusCheck(): void {
    const { status, errorMsg } = useAppSelector((state) => state.records);

    useEffect(() => {
        console.log(status);
        if (status === 'error') {
            throw Error(errorMsg);
        }
    }, [status]);
}

export { useStatusCheck };
