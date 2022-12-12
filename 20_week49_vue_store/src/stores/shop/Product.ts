interface Product {
    id: string;
    brand: string;
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

export { type Product };
