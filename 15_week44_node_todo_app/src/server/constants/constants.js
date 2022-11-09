import path from 'path';

export class Constants {
    /** @type {string} */
    static LOCAL_DATA_PATH = path.resolve('data', 'data.json');

    /** @type {string} */
    static PUBLIC_PATH = path.resolve('dist', 'public');

    /** @type {string} */
    static ENV_DEV_LOCAL = 'dev-local';

    /** @type {number} */
    static PORT = process.env.PORT || 7777;
}
