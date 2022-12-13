interface Product {
    id: string;
    brand: {
        id: string;
        name: string;
    };
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
