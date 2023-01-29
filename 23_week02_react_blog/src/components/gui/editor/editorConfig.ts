import { EditorConfig, EditorField } from './editorTypes';

/**
 *
 */
function editorConfig(): EditorConfig {
    const DELIMITER = '__';
    const ADD_ITEM_ID = 'add';
    const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
    const config: EditorField[][] = [
        [
            {
                id: `cover`,
                label: 'Front Cover URL',
                type: 'image',
            },
        ],
        [
            {
                id: 'album',
                label: 'Album',
                type: 'textarea',
                rows: 2,
                focus: true,
            },
            {
                id: 'artist',
                label: 'Artist',
            },
            {
                id: 'year',
                label: 'Original Release Year',
                type: 'number',
                range: {
                    min: 1900,
                    max: +today().year,
                },
                defaultValue: today().year,
            },
            {
                id: 'label',
                label: 'Record Label',
            },
            {
                id: 'addedDate',
                label: 'Added Date',
                type: 'date',
                defaultValue: today().full,
            },
        ],
        [
            {
                id: `description${DELIMITER}text`,
                label: 'Description',
                type: 'textarea',
                rows: 20,
                notRequired: true,
            },
            {
                id: `description${DELIMITER}srcUrl`,
                label: 'Description Source URL',
                notRequired: true,
            },
            {
                id: 'discogsUrl',
                label: 'Discogs URL',
            },
        ],
    ];

    /**
     *
     */
    function grouped(): EditorField[][] {
        return [...config, colorFields()];
    }

    /**
     *
     */
    function ungrouped(): EditorField[] {
        return grouped().reduce(
            (fields: EditorField[], result: EditorField[]) => result.concat(fields),
            []
        );
    }

    /**
     *
     */
    function colorFields(): EditorField[] {
        const fields: EditorField[] = [];
        for (let index = 0; index < 4; index++) {
            fields.push({
                id: colorInputID(index),
                label: 'Theme Color ' + index,
                type: 'color',
                defaultValue: '#000000',
            });
            fields.push({
                id: colorPickerID(index),
                type: 'color_picker',
                defaultValue: '#000000',
                noSubmit: true,
            });
        }
        return fields;
    }

    /**
     *
     */
    function today(): { full: string; year: string } {
        const isoDate = new Date().toISOString();
        const full = isoDate.substring(0, isoDate.indexOf('T'));
        return { full, year: full.substring(0, 4) };
    }

    /**
     *
     */
    function colorInputID(index: number): string {
        return 'colorTheme' + DELIMITER + index;
    }

    /**
     *
     */
    function colorPickerID(index: number): string {
        return colorInputID(index) + '_picker';
    }

    return { grouped, ungrouped, colorPickerID, DELIMITER, ADD_ITEM_ID, ADMIN_EMAIL };
}

export { editorConfig };
