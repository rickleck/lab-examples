import { FileStorage } from '../io/file-storage.js';

export class ApiService {
    /**
     * @param {express.Request} req
     * @param {express.Response} res
     */
    static async getAllItems(req, res) {
        try {
            const data = await FileStorage.readFile();
            this.#sendData(res, 200, data);
        } catch (error) {
            this.#sendError(res, 500, error);
        }
    }

    /**
     * @param {express.Request} req
     * @param {express.Response} res
     */
    static async createItem(req, res) {
        try {
            if (req.body && Object.keys(req.body).length > 0) {
                const data = await FileStorage.readFile();
                const item = req.body;
                item.id = Date.now();
                data.items.push(item);
                await FileStorage.writeFile(data);
                this.#sendData(res, 201, item);
            } else {
                this.#sendError(res, 400, 'Could not add item because it has no properties.');
            }
        } catch (error) {
            this.#sendError(res, 500, error);
        }
    }

    /**
     * @param {express.Request} req
     * @param {express.Response} res
     */
    static async handleItemByID(req, res) {
        try {
            const id = req.params.id;
            const data = await FileStorage.readFile();
            const index = data.items.findIndex((item) => item.id == id);

            if (index !== -1) {
                const item = data.items[index];

                switch (req.method) {
                    case 'GET':
                        this.#sendData(res, 200, item);
                        return;

                    case 'DELETE':
                        data.items.splice(index, 1);
                        break;

                    case 'PATCH':
                        Object.assign(item, req.body);
                        break;
                }

                await FileStorage.writeFile(data);
                this.#sendStatus(res, 204);
            } else {
                this.#sendError(res, 404, `Item with id: ${id} not found.`);
            }
        } catch (error) {
            this.#sendError(res, 500, error);
        }
    }

    /**
     * @param {express.Response} res
     * @param {number} code
     * @param {object} data
     */
    static #sendData(res, code, data) {
        res.status(code).json(data);
        res.end();
    }

    /**
     * @param {express.Response} res
     * @param {number} code
     * @param {string} msg
     */
    static #sendError(res, code, msg) {
        res.status(code).json({ message: msg });
        res.end();
    }

    /**
     * @param {express.Response} res
     * @param {number} code
     */
    static #sendStatus(res, code) {
        res.sendStatus(code);
        res.end();
    }
}
