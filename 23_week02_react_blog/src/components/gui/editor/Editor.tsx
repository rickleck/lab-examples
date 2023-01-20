import './Editor.scss';
import { BlogPostData } from '@/types/BlogPostData';
import { Form } from 'react-router-dom';
import {
    FormFieldValues,
    FormInputRef,
    FormTextAreaRef,
    useFormFieldRefs,
} from '@/utils/useFormFieldRefs';
import EditorMenu from './EditorMenu';

type EditortProps = {
    items: BlogPostData[];
    activeID: string | undefined;
};

function Editor({ items, activeID }: EditortProps) {
    const activeItemData = items.find((item: BlogPostData) => item.id === activeID);
    const today = (): string => {
        const isoDate = new Date().toISOString();
        return isoDate.substring(0, isoDate.indexOf('T'));
    };
    const fieldRefs = useFormFieldRefs(
        [
            { name: 'title' },
            { name: 'published', defaultValue: today() },
            { name: 'author', defaultValue: 'Admin' },
            { name: 'body' },
            { name: 'img_src' },
        ],
        {
            ...(activeItemData as FormFieldValues | undefined),
        },
        'title'
    );

    return (
        <div className="editor">
            <EditorMenu items={items} />

            <Form className="form">
                <input ref={fieldRefs.title as FormInputRef} id="title" name="title" />
                <input
                    ref={fieldRefs.published as FormInputRef}
                    id="published"
                    name="published"
                    type="date"
                />
                <input
                    ref={fieldRefs.author as FormInputRef}
                    id="author"
                    name="author"
                    type="text"
                />
                <textarea ref={fieldRefs.body as FormTextAreaRef} id="body" name="body"></textarea>
                <input
                    ref={fieldRefs.img_src as FormInputRef}
                    id="img_src"
                    name="img_src"
                    type="text"
                />
            </Form>
        </div>
    );
}

export default Editor;
