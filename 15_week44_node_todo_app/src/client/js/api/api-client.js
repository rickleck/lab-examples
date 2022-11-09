import { Constants } from '../constants/constants';

export class ApiClient {
    /**
     * @returns {Promise}
     */
    static async getAllItems() {
        return await this.#request('GET');
    }

    /**
     * @param {object} data
     * @returns {Promise}
     */
    static async createItem(data) {
        return await this.#request('POST', '', data);
    }

    /**
     * @param {string} id
     * @param {object} data
     * @returns {Promise}
     */
    static async updateItem(id, data) {
        return await this.#request('PATCH', id, data);
    }

    /**
     * @param {string} id
     * @returns {Promise}
     */
    static async deleteItem(id) {
        return await this.#request('DELETE', id);
    }

    /**
     * @param {string} method
     * @param {string} path
     * @param {object} data
     * @returns {Promise}
     */
    static async #request(method, path = '', data = undefined) {
        const options = {
            method: method,
        };
        if (data) {
            options.headers = {
                'Content-Type': 'application/json',
            };
            options.body = JSON.stringify(data);
        }
        const res = await fetch(Constants.API_BASE_URL + path, options);
        if (!res.ok) {
            throw new Error(res.status + ' ' + res.statusText);
        } else {
            return res.status !== 204 ? res.json() : {};
        }
    }
}
