import express from 'express';
import { ApiService } from './api-service.js';

export class ApiRouter {
    /**
     * @returns {express.Router}
     */
    static get routes() {
        const router = express.Router();

        router.get('/', (req, res) => ApiService.getAllItems(req, res));

        router.post('/', (req, res) => ApiService.createItem(req, res));

        router.get('/:id', (req, res) => ApiService.handleItemByID(req, res));

        router.patch('/:id', (req, res) => ApiService.handleItemByID(req, res));

        router.delete('/:id', (req, res) => ApiService.handleItemByID(req, res));

        return router;
    }
}
