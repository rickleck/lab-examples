import { ref, computed, type Ref } from 'vue';
import type { Product } from '@/stores/shop/Product';

interface Basket {
    items: Ref<BasketItem[]> | BasketItem[];
    itemsTotal: Ref<number> | number;
    subTotal: Ref<number> | number;
    add: (product: Product) => void;
    remove: (product: Product) => void;
    setQuantity: (product: Product, quantity: number) => void;
}

interface BasketItem {
    id: string;
    product: Product;
    quantity: number;
}

function useBasket(): Basket {
    const items = ref<BasketItem[]>([]);

    /**
     *
     */
    const subTotal = computed((): number => {
        return items.value.reduce(
            (sum: number, item: BasketItem) => sum + item.product.price.amount * item.quantity,
            0
        );
    });

    /**
     *
     */
    const itemsTotal = computed((): number => {
        return items.value.reduce((sum: number, item: BasketItem) => sum + item.quantity, 0);
    });

    /**
     *
     */
    function add(product: Product): void {
        const item = items.value.find((i: BasketItem) => product.id == i.id);
        item
            ? (item.quantity += 1)
            : items.value.push(<BasketItem>{
                  id: product.id,
                  product: product,
                  quantity: 1,
              });
    }

    /**
     *
     */
    function remove(product: Product): void {
        items.value = items.value.filter((i: BasketItem) => product.id !== i.id);
    }

    /**
     *
     */
    function setQuantity(product: Product, quantity: number): void {
        const item = items.value.find((i: BasketItem) => product.id == i.id);
        if (item) {
            quantity < 1 ? remove(product) : (item.quantity = quantity);
        }
    }

    return { items, itemsTotal, subTotal, add, remove, setQuantity };
}

export { useBasket, type Basket, type BasketItem };
