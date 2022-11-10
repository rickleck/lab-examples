import { Task } from './task-schema.js';

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @escription
 * - GET: /api/tasks
 * - Returns a list of all tasks.
 */
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    } catch (error) {
        return res.status(500).json({
            message: 'Could not get tasks.',
        });
    }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @escription
 * - GET: /api/tasks/:id
 * - Returns a task by id.
 */
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({
                message: 'Task not found.',
            });
        }
        res.status(200).json(task);
    } catch (err) {
        return res.status(500).json({
            message: 'Could not get task.',
        });
    }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @description
 * - POST: /api/tasks
 * - Creates a new task.
 */
const createTask = async (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({
            message: 'Failed to create new task. The task has no title.',
        });
    }

    try {
        const task = await new Task({ title }).save();
        res.status(201).json(task);
    } catch (err) {
        return res.status(500).json({
            message: 'Failed to create new task.',
            err: err.message,
        });
    }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @escription
 * - PATCH: /api/tasks/:id
 * - Updates a task by id.
 */
const updateTaskById = async (req, res) => {
    try {
        const { title, done } = req.body;
        const task = await Task.findByIdAndUpdate(req.params.id, { title, done }, { new: true });
        res.status(200).json(task);
    } catch (err) {
        return res.status(500).json({
            message: 'Could not update task.',
        });
    }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @escription
 * - DELETE: /api/tasks/:id
 * - Deletes a task by id.
 */
const deleteTaskById = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.status(200).json(task);
    } catch (err) {
        return res.status(500).json({
            message: 'Could not delete task.',
        });
    }
};

export { getAllTasks, getTaskById, createTask, updateTaskById, deleteTaskById };
