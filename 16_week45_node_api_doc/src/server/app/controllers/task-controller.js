import express from 'express';
import * as model from '../models/task/task-model.js';

const router = express.Router();

/**
 * GET: /api/tasks
 */
router.get('/', model.getAllTasks);

/**
 * GET: /api/tasks/:id
 */
router.get('/:id', model.getTaskById);

/**
 * POST: /api/tasks
 */
router.post('/', model.createTask);

/**
 * PATCH: /api/tasks/:id
 */
router.patch('/:id', model.updateTaskById);

/**
 * DELETE: /api/tasks/:id
 */
router.delete('/:id', model.deleteTaskById);

export { router as controller };
