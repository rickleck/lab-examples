interface FireStoreClient<T> {
    getAll: () => Promise<T[]>;
    getByID: (id: string) => Promise<T | undefined>;
    addItem: (itemData: Omit<T, 'id'>) => Promise<T | undefined>;
    deleteItem: (id: string) => Promise<string>;
    updateItem: (id: string, itemData: Partial<Omit<T, 'id'>>) => Promise<T | undefined>;
}

export { type FireStoreClient };
