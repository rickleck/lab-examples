import { Task } from '../schemas/task-schema.js';

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @escription
 * - GET: /api/tasks
 * - Returns a list of all tasks.
 */
const getAllTasks = (req, res) => {
    Task.find({}, (err, data) => {
        if (err) {
            return res.status(500).json({
                message: 'Could not get all tasks.',
            });
        }

        res.status(200).json(data);
    });
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @description
 * - POST: /api/tasks
 * - Creates a new task.
 */
const createTask = (req, res) => {
    if (!req.body || !Object.hasOwn(req.body, 'title') || !Object.hasOwn(req.body, 'done')) {
        return res.status(400).json({
            message:
                'Failed to create new task. Required properties are {title: string, done: boolean}.',
        });
    }

    const { title, done } = req.body;

    Task.create(
        {
            title,
            done,
        },
        (err, data) => {
            if (err) {
                return res.status(500).json({
                    message: 'Failed to create new task. Internal error.',
                    err: err.message,
                });
            }

            res.status(201).json(data);
        }
    );
};

export { getAllTasks, createTask };
