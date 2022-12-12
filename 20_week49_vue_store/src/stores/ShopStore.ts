import { reactive, type UnwrapNestedRefs } from 'vue';
import { defineStore } from 'pinia';
import { useBasket, type Basket } from '@/stores/shop/Basket';
import { useInventory, type Inventory } from '@/stores/shop/Inventory';
import productsData from '@/assets/data/products.json';

interface Shop {
    inventory: UnwrapNestedRefs<Inventory>;
    basket: UnwrapNestedRefs<Basket>;
}

const useShopStore = defineStore('shop', (): Shop => {
    const inventory = reactive(useInventory(productsData));
    const basket = reactive(useBasket());

    //Dev
    //basket.add(inventory.list[0]);
    //basket.add(inventory.list[3]);

    return {
        inventory,
        basket,
    };
});

export { useShopStore };
