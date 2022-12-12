import { sortBy as _sortBy, filter as _filter } from 'lodash';
import type { Product } from '@/stores/shop/Product';

interface Inventory {
    list: Product[];
    sortedBy: (predicate: string[], customList?: Product[]) => Product[];
    productById: (id: string, customList?: Product[]) => Product | undefined;
    filterBy: (key: string, value: any, customList?: Product[]) => Product[];
}

function useInventory(productstData?: Product[]): Inventory {
    const list = productstData || [];

    /**
     *
     */
    function sortedBy(predicate: string[], customList?: Product[]): Product[] {
        return _sortBy(customList || list, ...predicate);
    }

    /**
     *
     */
    function productById(id: string, customList?: Product[]): Product | undefined {
        return (customList || list).find((product: Product) => product.id === id);
    }

    /**
     *
     */
    function filterBy(key: string, value: any, customList?: Product[]): Product[] {
        return _filter(customList || list, [key, value]);
    }

    return { list, sortedBy, productById, filterBy };
}

export { useInventory, type Inventory };
