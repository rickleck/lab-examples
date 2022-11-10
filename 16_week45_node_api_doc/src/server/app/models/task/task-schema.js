import { model, Schema } from 'mongoose';

const Task = model(
    'Task',
    Schema(
        {
            title: {
                type: String,
                required: true,
            },
            done: {
                type: Boolean,
                required: true,
                default: false,
            },
        },
        { timestamps: true }
    )
);

export { Task };
