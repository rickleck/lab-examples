import { FieldConfig } from '@/utils/fieldrefs/useFieldRefsTypes';

type EditorField = FieldConfig & {
    label?: string;
    type?: 'text' | 'textarea' | 'number' | 'color' | 'color_picker' | 'date' | 'image';
    rows?: number;
    focus?: boolean;
    noSubmit?: boolean;
    notRequired?: boolean;
    range?: {
        min: number;
        max: number;
    };
};

interface EditorConfig {
    DELIMITER: string;
    ADD_ITEM_ID: string;
    ADMIN_EMAIL: string;
    grouped(): EditorField[][];
    ungrouped(): EditorField[];
    colorPickerID(index: number): string;
}

export { type EditorField, type EditorConfig };
