import { useEffect, useRef } from 'react';
import { FormFieldRefs, FormFieldValues } from './types/FormField';

/**
 *
 */
type RefConfig = { id: string; defaultValue?: string; focus?: boolean };

/**
 *
 */
function useFormFieldRefs(
    fields: RefConfig[],
    fieldValues: FormFieldValues | undefined
): FormFieldRefs {
    const initRefs = (refs: FormFieldRefs): FormFieldRefs => {
        fields.forEach((field: RefConfig) => (refs[field.id] = useRef(null)));
        return refs;
    };
    const fieldRefs = useRef<FormFieldRefs>(initRefs({}));

    /**
     *
     */
    useEffect(() => {
        fields.forEach((field: RefConfig) => {
            if (fieldRefs.current[field.id].current) {
                fieldRefs.current[field.id].current!.value =
                    (fieldValues && fieldValues[field.id]) || field.defaultValue || '';

                field.focus && fieldRefs.current[field.id].current!.focus();
            }
        });
    }, [fieldValues, fieldRefs.current]);

    return fieldRefs.current;
}

export { useFormFieldRefs };
