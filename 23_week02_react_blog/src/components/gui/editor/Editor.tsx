import './Editor.scss';
import { FormEvent, MutableRefObject, useEffect, useRef } from 'react';
import { flatten, unflatten } from 'flat';
import { editorConfig } from './editorConfig';
import { EditorField } from './editorTypes';
import { useFieldRefs } from '@/utils/fieldrefs/useFieldRefs';
import { FieldValues } from '@/utils/fieldrefs/useFieldRefsTypes';
import {
    RecordCreateData,
    RecordData,
    RecordUpdateData,
} from '@/app/features/records/recordsTypes';
import { useAppDispatch, useAppSelector } from '@/app/storeHooks';
import { addItem, deleteItem, updateItem } from '@/app/features/records/recordsThunks';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '@/router/appRouterConfig';
import { motion } from 'framer-motion';
import DOMPurify from 'dompurify';
import EditorMenu from './EditorMenu';
/**
 *
 */
type EditorProps = {
    items: RecordData[];
    activeItem: RecordData | undefined;
};

/**
 *
 */
function Editor({ items, activeItem }: EditorProps) {
    const dispatch = useAppDispatch();
    const { status } = useAppSelector((state) => state.records);
    const user = useAppSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const config = editorConfig();
    const refImage = useRef<HTMLImageElement | null>(null);
    const flatData: FieldValues | undefined = activeItem
        ? flatten(activeItem, { delimiter: config.DELIMITER })
        : undefined;
    const fieldRefs = useFieldRefs(config.ungrouped(), flatData);
    const protectItem = activeItem && activeItem.protected && user?.email !== config.ADMIN_EMAIL;

    /**
     *
     */
    useEffect(() => {
        if (activeItem) {
            refImage.current &&
                (refImage.current.src = activeItem.cover) &&
                (refImage.current.style.visibility = 'visible');

            activeItem.colorTheme.forEach((color: string, index: number) => {
                const refColorPicker = fieldRefs[config.colorPickerID(index)];
                refColorPicker.current && (refColorPicker.current.value = color);
            });
        } else {
            refImage.current &&
                (refImage.current.style.visibility = 'hidden') &&
                (refImage.current.src = '');
        }
        window.scrollTo(0, 0);
    }, [activeItem, refImage.current, fieldRefs]);

    /**
     *
     */
    function handleImgSrcChange(e: FormEvent): void {
        const value = (e.target as HTMLInputElement).value;
        refImage.current &&
            (refImage.current.src = value) &&
            (refImage.current.style.visibility = value ? 'visible' : 'hidden');
    }

    /**
     *
     */
    function handleColorChange(e: FormEvent, syncTo: string): void {
        const value = (e.target as HTMLInputElement).value;
        fieldRefs[syncTo].current &&
            (fieldRefs[syncTo].current!.value = CSS.supports('color', value) ? value : '#000000');
    }

    /**
     *
     */
    function handleSubmit(e: FormEvent): void {
        e.preventDefault();

        if (status === 'loading') return;

        const flatData: FieldValues = {};
        config.ungrouped().forEach((fieldConfig: EditorField) => {
            const fieldRef = fieldRefs[fieldConfig.id].current;
            if (!fieldConfig.noSubmit)
                flatData[fieldConfig.id] = DOMPurify.sanitize(fieldRef?.value || '');
        });

        const saveData: RecordCreateData | RecordUpdateData = unflatten(flatData, {
            delimiter: config.DELIMITER,
        });

        if (activeItem) {
            dispatch(updateItem({ id: activeItem.id, itemData: saveData as RecordUpdateData }));
        } else {
            dispatch(addItem(saveData as RecordCreateData)).then(() => {
                navigate(appRoutes.ADMIN);
            });
        }
    }

    /**
     *
     */
    function handleDelete(): void {
        activeItem && dispatch(deleteItem(activeItem.id)).then(() => navigate(appRoutes.ADMIN));
    }

    /**
     *
     */
    function getFormElement({
        id,
        label,
        rows,
        range,
        notRequired,
        type = 'text',
    }: EditorField): JSX.Element {
        const props: Partial<EditorField> & {
            name: string;
            required: boolean;
            min?: number;
            max?: number;
        } = {
            id,
            name: id,
            required: !notRequired,
        };

        range && Object.assign(props, range);

        return (
            <div className="form-control form-control-editor" key={id}>
                {type === 'image' && (
                    <div className="image">
                        <img ref={refImage} />
                    </div>
                )}

                {label && (
                    <label className="font-bold" htmlFor={id}>
                        {label}
                    </label>
                )}

                {(type === 'text' || type === 'number' || type === 'date') && (
                    <input
                        {...props}
                        ref={fieldRefs[id] as MutableRefObject<HTMLInputElement | null>}
                        type={type}
                    />
                )}

                {type === 'textarea' && (
                    <textarea
                        {...props}
                        ref={fieldRefs[id] as MutableRefObject<HTMLTextAreaElement | null>}
                        rows={rows || 20}
                    />
                )}

                {type === 'image' && (
                    <input
                        {...props}
                        ref={fieldRefs[id] as MutableRefObject<HTMLInputElement | null>}
                        type={'text'}
                        onChange={handleImgSrcChange}
                    />
                )}

                {type === 'color' && (
                    <div className="color-field">
                        <input
                            {...props}
                            ref={fieldRefs[id] as MutableRefObject<HTMLInputElement | null>}
                            type={'text'}
                            onChange={(e: FormEvent) => {
                                handleColorChange(e, id + '_picker');
                            }}
                        />
                        <input
                            ref={
                                fieldRefs[
                                    id + '_picker'
                                ] as MutableRefObject<HTMLInputElement | null>
                            }
                            type={'color'}
                            onChange={(e: FormEvent) => {
                                handleColorChange(e, id);
                            }}
                        />
                    </div>
                )}
            </div>
        );
    }

    const formVariants = {
        show: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
            },
        },
    };

    const elementVariants = {
        hidden: {
            opacity: 0,
            transition: { duration: 0 },
        },
        show: {
            opacity: 1,
            transition: { duration: 0.2, ease: 'easeOut' },
        },
    };

    return (
        <div className="editor">
            <EditorMenu items={items} activeID={activeItem ? activeItem.id : null} />
            <div>
                <h1 className="title">{activeItem ? 'Edit' : 'Add New'}</h1>
                <motion.form
                    key={activeItem?.id || config.ADD_ITEM_ID}
                    variants={formVariants}
                    initial="hidden"
                    animate="show"
                    className="form"
                    onSubmit={handleSubmit}
                >
                    {config.grouped().map((group: EditorField[], index: number) => (
                        <motion.div
                            variants={elementVariants}
                            className="element-group card-form"
                            key={index}
                        >
                            {group.map(getFormElement)}
                        </motion.div>
                    ))}

                    <div className="buttons">
                        {protectItem && (
                            <div className="protected">
                                Demo users cannot edit or delete this entry.
                            </div>
                        )}
                        {activeItem && (
                            <button
                                onClick={handleDelete}
                                type="button"
                                className="btn-primary"
                                disabled={protectItem}
                            >
                                Delete
                            </button>
                        )}
                        <button type="submit" className="btn-primary" disabled={protectItem}>
                            Save
                        </button>
                    </div>
                </motion.form>
            </div>
        </div>
    );
}

export default Editor;
