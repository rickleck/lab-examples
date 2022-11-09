import express from 'express';
import { ApiRouter } from './api/api-router.js';
import { Constants } from './constants/constants.js';
import { FileStorage } from './io/file-storage.js';

export class Server {
    /** @type {Server} */
    static #instance;

    /**
     * @returns {Server} global instance of Server
     */
    static get instance() {
        if (this.#instance === undefined) {
            this.#instance = new Server();
        }
        return this.#instance;
    }

    /**
     * @constructor
     */
    constructor() {}

    /**
     *
     */
    run() {
        const app = express();
        app.use(express.json());

        app.use(express.static(Constants.PUBLIC_PATH));
        app.use('/api', ApiRouter.routes);

        app.listen(Constants.PORT, () =>
            console.log('Server is running on port: ' + Constants.PORT)
        );
    }
}

Server.instance.run();
