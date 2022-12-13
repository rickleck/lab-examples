import { sortBy as _sortBy, filter as _filter } from 'lodash';
import type { Product } from '@/stores/shop/Product';

interface Inventory<T> {
    getList: () => T[];
    productById: (id: string) => T | undefined;
    hasBrandById: (id: string) => boolean;
    sortBy: (iteratees: string[] | Function) => void;
    filterTo: (iteratees: string[] | Function) => void;
    reverse: () => void;
}

function useInventory(productstData?: Product[]): Inventory<Product> {
    let list = productstData || [];

    /**
     *
     */
    function getList(): Product[] {
        return list;
    }

    /**
     *
     */
    function productById(id: string): Product | undefined {
        return list.find((product: Product) => product.id === id);
    }

    /**
     *
     */
    function hasBrandById(id: string): boolean {
        return list.find((product: Product) => product.brand.id === id) != undefined;
    }

    /**
     *
     */
    function sortBy(iteratees: string[] | Function): void {
        list = _sortBy(list, iteratees) as Product[];
    }

    /**
     *
     */
    function filterTo(iteratees: string[] | Function): void {
        list = _filter(list, iteratees) as Product[];
    }

    /**
     *
     */
    function reverse(): void {
        list.reverse();
    }

    return { getList, productById, hasBrandById, sortBy, filterTo, reverse };
}

export { useInventory, type Inventory };
