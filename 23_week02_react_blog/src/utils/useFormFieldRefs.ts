import { MutableRefObject, useEffect, useRef } from 'react';

type FormInputRef = MutableRefObject<HTMLInputElement | null>;
type FormTextAreaRef = MutableRefObject<HTMLTextAreaElement | null>;
type FormFieldValues = { [name: string]: string | undefined };
type FormFieldConfig = { name: string; defaultValue?: string };
type FormFieldRefs = {
    [key: string]: FormInputRef | FormTextAreaRef;
};

function useFormFieldRefs(
    fields: FormFieldConfig[],
    fieldValues: FormFieldValues | undefined,
    focus?: string
): FormFieldRefs {
    const initRefs = (refs: FormFieldRefs): FormFieldRefs => {
        fields.forEach((field: FormFieldConfig) => (refs[field.name] = useRef(null)));
        return refs;
    };
    const fieldRefs = useRef<FormFieldRefs>(initRefs({}));

    /**
     *
     */
    useEffect(() => {
        fields.forEach((field: FormFieldConfig) => {
            if (fieldRefs.current[field.name].current) {
                fieldRefs.current[field.name].current!.value =
                    (fieldValues && fieldValues[field.name]) || field.defaultValue || '';
            }
        });

        focus && fieldRefs.current[focus] && fieldRefs.current[focus].current?.focus();
    }, [fieldValues, fieldRefs.current, focus]);

    return fieldRefs.current;
}

export {
    useFormFieldRefs,
    type FormFieldConfig,
    type FormInputRef,
    type FormTextAreaRef,
    type FormFieldValues,
};
