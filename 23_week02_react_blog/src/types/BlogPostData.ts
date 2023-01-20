import { FieldValue } from 'firebase/firestore';

type BlogPostData = {
    readonly id: string;
    readonly modified: FieldValue;
    title: string;
    author: string;
    published: string;
    body: string;
    img_src?: string;
};

type BlogPostDataUpdate = Partial<
    Pick<BlogPostData, 'title' | 'author' | 'published' | 'body' | 'img_src'>
>;

export { type BlogPostData, type BlogPostDataUpdate };
