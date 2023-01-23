import './Editor.scss';
import { MutableRefObject } from 'react';
import { ActionFunctionArgs, Form } from 'react-router-dom';
import { FormFieldValues } from '@/utils/forms/types/FormField';
import { useFormFieldRefs } from '@/utils/forms/useFormFieldRefs';
import { RecordCreateData, RecordData, RecordUpdateData } from '@/data/types/RecordData';
import { flatten, unflatten } from 'flat';
import { DELIMITER, editorConfig } from './config/editorConfig';
import { EditorFormField } from './types/EditorFormField';
import { dataAPI } from '@/data/dataAPI';
import EditorMenu from './EditorMenu';

/**
 *
 */
type EditorProps = {
    items: RecordData[];
    activeID: string | undefined;
};

/**
 *
 */
function Editor({ items, activeID }: EditorProps) {
    const activeItemData = items.find((item: RecordData) => item.id === activeID);

    const flatData = activeItemData ? flatten(activeItemData, { delimiter: DELIMITER }) : undefined;
    const fieldRefs = useFormFieldRefs(editorConfig, flatData as FormFieldValues | undefined);

    /**
     *
     */
    function getFormElement({
        id,
        type = 'text',
        tag = 'input',
        noSubmit,
        notRequired,
    }: EditorFormField): JSX.Element {
        const props = {
            id,
            key: id,
            name: noSubmit ? '' : id,
            required: !notRequired,
        };
        return tag === 'textarea' ? (
            <textarea
                {...props}
                ref={fieldRefs[id] as MutableRefObject<HTMLTextAreaElement | null>}
            />
        ) : (
            <input
                {...props}
                type={type}
                ref={fieldRefs[id] as MutableRefObject<HTMLInputElement | null>}
            />
        );
    }

    return (
        <div className="editor">
            <EditorMenu items={items} />
            <Form
                className="form"
                method={activeID ? 'patch' : 'post'}
                action={'/admin/' + (activeID || '')}
            >
                {editorConfig.map((field: EditorFormField) => getFormElement(field))}

                <button type="submit" className="btn-outline">
                    Save
                </button>
                {activeID && (
                    <button type="button" className="btn-outline">
                        Delete
                    </button>
                )}
            </Form>
        </div>
    );
}

/**
 *
 */
async function editorFormAction({ params, request }: ActionFunctionArgs): Promise<void | string> {
    if (request.method === 'DELETE') {
        return dataAPI().deleteItem(params.id!);
    } else {
        const formData = await request.formData();
        const flatData: { [key: string]: string } = {};
        formData.forEach(
            (value: FormDataEntryValue, key: string) => (flatData[key] = value as string)
        );

        const saveData: RecordCreateData | RecordUpdateData = unflatten(flatData, {
            delimiter: DELIMITER,
        });
        switch (request.method) {
            case 'POST':
                return dataAPI().addItem(saveData as RecordCreateData);
            case 'PATCH':
                return dataAPI().updateItem(params.id!, saveData as RecordUpdateData);
        }
    }
}

export { Editor as default, editorFormAction };
