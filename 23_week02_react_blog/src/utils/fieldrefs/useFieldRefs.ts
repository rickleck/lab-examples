import { useEffect, useRef } from 'react';
import { FieldConfig, FieldRefs, FieldValues } from './useFieldRefsTypes';

/**
 *
 */
function useFieldRefs(fields: FieldConfig[], fieldValues: FieldValues | undefined): FieldRefs {
    const initRefs = (): FieldRefs => {
        const refs: FieldRefs = {};
        fields.forEach((field: FieldConfig) => (refs[field.id] = useRef(null)));
        return refs;
    };
    const fieldRefs = useRef<FieldRefs>(initRefs());

    /**
     *
     */
    useEffect(() => {
        fields.forEach((field: FieldConfig) => {
            const current = fieldRefs.current[field.id].current;
            if (current) {
                current.value = (fieldValues && fieldValues[field.id]) || field.defaultValue || '';
                field.focus && current.focus();
            }
        });
    }, [fieldValues, fieldRefs.current, fields]);

    return fieldRefs.current;
}

export { useFieldRefs };
