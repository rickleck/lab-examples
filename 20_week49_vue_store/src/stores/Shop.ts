import { defineStore } from 'pinia';
import { sortBy } from 'lodash';
import productsData from '../assets/data/products.json';

interface Shop {
    products: Product[];
}

interface Product {
    id: string;
    name: string;
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

const useShop = defineStore('shop', (): Shop => {
    const products = sortBy(productsData, 'name');

    return { products };
});

export { useShop, type Product };
