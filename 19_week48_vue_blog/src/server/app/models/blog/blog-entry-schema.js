import { model, Schema } from 'mongoose';

const BlogEntry = model(
    'BlogEntry',
    Schema(
        {
            title: {
                type: String,
                required: true,
            },
            author: {
                type: String,
                required: true,
            },
            published: {
                type: String,
                required: true,
            },
            body: {
                type: String,
                required: true,
            },
            img_src: {
                type: String,
                required: false,
            },
        },
        { timestamps: true }
    )
);

export { BlogEntry };
