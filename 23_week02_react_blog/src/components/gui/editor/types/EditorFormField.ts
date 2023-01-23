type EditorFormField = {
    id: string;
    defaultValue?: string;
    type?: 'text' | 'number' | 'color' | 'date';
    tag?: 'input' | 'textarea';
    focus?: boolean;
    noSubmit?: boolean;
    notRequired?: boolean;
};

export { type EditorFormField };
