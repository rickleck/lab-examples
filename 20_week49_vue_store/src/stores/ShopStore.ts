import { computed, ref, type Ref } from 'vue';
import { uniqBy as _uniqBy, sortBy as _sortBy } from 'lodash';
import { defineStore } from 'pinia';
import { useBasket, type Basket } from '@/stores/shop/Basket';
import { useInventory, type Inventory } from '@/stores/shop/Inventory';
import type { Product } from '@/stores/shop/Product';
import productsData from '@/assets/data/products.json';

interface Shop {
    inventoryMasterList: Ref<Product[]>;
    basket: Ref<Basket>;
    allBrands: Ref<{ id: string; name: string }[]>;
    inventory: () => Inventory<Product>;
}

const useShopStore = defineStore('shop', (): Shop => {
    const inventoryMasterList = computed<Product[]>(() => productsData); //Read only
    const basket = ref<Basket>(useBasket());

    const allBrands = computed(() => {
        const list = _uniqBy(inventoryMasterList.value, (product: Product) => product.brand.id).map(
            (product: Product) => product.brand
        );
        return _sortBy(list, ['name']);
    });

    const inventory = (): Inventory<Product> => useInventory([...inventoryMasterList.value]);

    //basket.value.add(inventoryMasterList.value[3]);
    //basket.value.add(inventoryMasterList.value[7]);

    return {
        inventoryMasterList,
        basket,
        inventory,
        allBrands,
    };
});

export { useShopStore };
