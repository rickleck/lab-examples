import { computed, ref, type Ref } from 'vue';
import { uniqBy as _uniqBy, sortBy as _sortBy, filter as _filter } from 'lodash';
import { defineStore } from 'pinia';
import productsData from '@/assets/data/products.json';

interface Brand {
    id: string;
    name: string;
}

interface Product {
    id: string;
    brand: Brand;
    model: string;
    price: {
        amount: number;
        currency: string;
    };
    available: {
        status: boolean;
        msg: string;
    };
    description: {
        short: string;
        full: string;
    };
    image: string;
}

interface Iventory {
    masterList: Ref<Product[]>;
    allBrands: Ref<Brand[]>;
    productById: (id: string) => Product | undefined;
    hasBrandById: (id: string) => boolean;
    sortBy: (condition: string[] | Function, segment?: Product[]) => Product[];
    filterTo: (condition: string[] | Function, segment?: Product[]) => Product[];
}

const useInventoryStore = defineStore('inventory', (): Iventory => {
    const masterList = ref<Product[]>(productsData);

    /**
     *
     */
    const allBrands = computed((): Brand[] => {
        const items = _uniqBy(masterList.value, (product: Product) => product.brand.id).map(
            (product: Product) => product.brand
        );
        return _sortBy(items, ['name']);
    });

    /**
     *
     */
    function productById(id: string): Product | undefined {
        return masterList.value.find((product: Product) => product.id === id);
    }

    /**
     *
     */
    function hasBrandById(id: string): boolean {
        return masterList.value.find((product: Product) => product.brand.id === id) != undefined;
    }

    /**
     *
     */
    function sortBy(condition: string[] | Function, segment?: Product[]): Product[] {
        return _sortBy(segment || masterList.value, condition) as Product[];
    }

    /**
     *
     */
    function filterTo(condition: string[] | Function, segment?: Product[]): Product[] {
        return _filter(segment || masterList.value, condition) as Product[];
    }

    return {
        masterList,
        allBrands,
        productById,
        hasBrandById,
        sortBy,
        filterTo,
    };
});

export { useInventoryStore, type Product, type Brand };
