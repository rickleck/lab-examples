import { MutableRefObject } from 'react';

type FormFieldValues = {
    [name: string]: string | undefined;
};

type FormFieldRefs = {
    [key: string]: MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null>;
};

export { type FormFieldRefs, type FormFieldValues };
