import express from 'express';
import * as model from '../models/tasks-model.js';

const router = express.Router();

/**
 * @description GET: /api/tasks
 */
router.get('/', model.getAllTasks);

/**
 * @description POST: /api/tasks
 */
router.post('/', model.createTask);

export { router as controller };
