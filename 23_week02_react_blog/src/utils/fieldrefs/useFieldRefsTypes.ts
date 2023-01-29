import { MutableRefObject } from 'react';

type FieldConfig = {
    id: string;
    defaultValue?: string;
    focus?: boolean;
};

type FieldValues = {
    [name: string]: string | undefined;
};

type FieldRefs = {
    [key: string]: MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null>;
};

export { type FieldRefs, type FieldValues, type FieldConfig };
