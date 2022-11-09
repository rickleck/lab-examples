import mongoose from 'mongoose';

const taskSchema = mongoose.model(
    'Task',
    mongoose.Schema(
        {
            title: {
                type: String,
                required: true,
            },
            done: {
                type: Boolean,
                required: true,
            },
        },
        { timestamps: true }
    )
);

export { taskSchema as Task };
