import { EditorFormField } from '../types/EditorFormField';

/**
 *
 */
const DELIMITER = '__';

/**
 *
 */
const editorConfig: EditorFormField[] = [
    {
        id: 'album',
        focus: true,
    },
    {
        id: 'artist',
    },
    {
        id: 'year',
        type: 'number',
    },
    {
        id: 'label',
    },
    {
        id: 'addedDate',
        type: 'date',
        defaultValue: today(),
    },
    {
        id: `description${DELIMITER}text`,
        tag: 'textarea',
    },
    {
        id: `description${DELIMITER}srcUrl`,
    },
    {
        id: `cover${DELIMITER}front`,
    },
    {
        id: `cover${DELIMITER}extra`,
        notRequired: true,
    },
    {
        id: 'discogsUrl',
    },
    {
        id: `colorTheme${DELIMITER}0`,
        defaultValue: '#000000',
    },
    {
        id: `colorTheme${DELIMITER}1`,
        defaultValue: '#000000',
    },
    {
        id: `colorTheme${DELIMITER}2`,
        defaultValue: '#000000',
    },
    {
        id: `colorTheme${DELIMITER}3`,
        defaultValue: '#000000',
    },
];

/**
 *
 */
function today(): string {
    const isoDate = new Date().toISOString();
    return isoDate.substring(0, isoDate.indexOf('T'));
}

export { editorConfig, DELIMITER };
