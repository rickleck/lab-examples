import express from 'express';
import * as model from '../models/blog/blog-model.js';

const controller = express.Router();

/**
 * GET: /api/tasks
 */
controller.get('/', model.getAllEntries);

/**
 * GET: /api/tasks/:id
 */
controller.get('/:id', model.getEntryById);

/**
 * POST: /api/tasks
 */
controller.post('/', model.createEntry);

/**
 * PATCH: /api/tasks/:id
 */
controller.patch('/:id', model.updateEntryById);

/**
 * DELETE: /api/tasks/:id
 */
controller.delete('/:id', model.deleteEntryById);

export { controller };
