import { reactive } from 'vue';

interface ApiStore<T, U> {
    BASE_URL: string;
    items: T[];
    get: (id?: string) => Promise<T[] | T>;
    post: (payLoad: U) => Promise<T>;
    del: (id: string) => Promise<T>;
    patch: (payLoad: U, id: string) => Promise<T>;
    put: (payLoad: U, id: string) => Promise<T>;
}

interface BlogEntry {
    _id: string;
    title: string;
    author: string;
    published: string;
    body: string;
    img_src?: string;
}

interface BlogEntryUpdate {
    title?: string;
    author?: string;
    published?: string;
    body?: string;
    img_src?: string;
}

type Method = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';

/**
 *
 */
const apiStore = reactive<ApiStore<BlogEntry, BlogEntryUpdate>>({
    BASE_URL: '',
    items: [],

    /**
     *
     */
    get(id: string = ''): Promise<BlogEntry[] | BlogEntry> {
        return new Promise((resolve, reject) => {
            doFetch('GET', id)
                .then((data: any[] | any) => {
                    if (Array.isArray(data)) this.items = data as any[];
                    resolve(data);
                })
                .catch((error: any) => reject(error));
        });
    },

    /**
     *
     */
    post(payLoad: BlogEntryUpdate): Promise<BlogEntry> {
        return doFetch('POST', '', payLoad) as Promise<BlogEntry>;
    },

    /**
     *
     */
    del(id: string): Promise<BlogEntry> {
        return doFetch('DELETE', id) as Promise<BlogEntry>;
    },

    /**
     *
     */
    patch(payLoad: BlogEntryUpdate, id: string): Promise<BlogEntry> {
        return doFetch('PATCH', id, payLoad) as Promise<BlogEntry>;
    },

    /**
     *
     */
    put(payLoad: BlogEntryUpdate, id: string): Promise<BlogEntry> {
        return doFetch('PUT', id, payLoad) as Promise<BlogEntry>;
    },
});

/**
 *
 */
async function doFetch(
    method: Method,
    id: string,
    payLoad?: BlogEntryUpdate
): Promise<BlogEntry[] | BlogEntry> {
    const options = <{ method: Method; headers?: { 'Content-Type': string }; body?: string }>{
        method: method,
    };

    if (payLoad) {
        options.headers = {
            'Content-Type': 'application/json',
        };
        options.body = JSON.stringify(payLoad);
    }

    const res = await fetch(apiStore.BASE_URL + id, options);
    if (!res.ok) {
        throw new Error(res.status + ' ' + res.statusText);
    }
    const data: any = res.status !== 204 ? await res.json() : {};

    return data;
}

export { apiStore, type BlogEntry, type BlogEntryUpdate };
