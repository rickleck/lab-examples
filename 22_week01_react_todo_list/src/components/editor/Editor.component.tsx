import '@/components/editor/Editor.styles.scss';
import { useRef, FormEvent, useContext, useEffect, useState } from 'react';
import { TaskUpdate } from '@/data/Data.types';
import { useDataSaver } from '@/data/hooks/useDataSaver.hook';
import { DataContext } from '@/data/Data.context';
import { EditorState } from '@/components/editor/Editor.types';
import { useErrorDispatch } from '@/components/main/states/error/Error.context';
import { ViewStateContext } from '../main/states/view/View.context';
import Modal from '@/components/common/Modal.component';
import FormSelect from '@/components/common/FormSelect.component';

/**
 *
 */
function Editor(): JSX.Element {
    const errorDispatch = useErrorDispatch();
    const { addTask, updateTask } = useDataSaver();
    const { tasksByListName, listNames } = useContext(DataContext);
    const [viewState, viewDispatch] = useContext(ViewStateContext);
    const [editorState, setEditorState] = useState({
        isSaving: false,
        newList: '',
        selectValue: viewState.currentList,
    });
    const inputTitle = useRef<HTMLInputElement | null>(null);
    const inputList = useRef<HTMLInputElement | null>(null);

    /**
     *
     */
    useEffect(() => {
        if (inputTitle.current) {
            viewState.editTask && (inputTitle.current.value = viewState.editTask.title);
            inputTitle.current?.focus();
        }
    }, []);

    /**
     *
     */
    function getTitle(): string {
        return (inputTitle.current?.value as string).trim();
    }

    /**
     *
     */
    function getListName(): string {
        return isNewList() ? editorState.newList : editorState.selectValue;
    }

    /**
     *
     */
    function isNewList(): boolean {
        return editorState.newList !== '';
    }

    /**
     *
     */
    async function handleSubmit(e: FormEvent): Promise<void> {
        e.preventDefault();

        if (editorState.isSaving) return;
        setEditorState((prev) => ({ ...prev, isSaving: true }));

        try {
            if (viewState.editTask) {
                const changes = Object.fromEntries(
                    Object.entries({ title: getTitle(), list: getListName() }).filter(
                        ([key, value]) => viewState.editTask![key as keyof TaskUpdate] !== value
                    )
                );
                if (Object.entries(changes).length > 0)
                    await updateTask(viewState.editTask.id, changes);
            } else {
                await addTask(getTitle(), getListName(), tasksByListName?.get(getListName()));
            }

            if (getListName() !== viewState.currentList)
                viewDispatch({ type: 'changeList', listName: getListName() });

            viewDispatch({ type: 'closeEditor' });
        } catch (error: any) {
            setEditorState((prev) => ({ ...prev, isSaving: false }));
            errorDispatch({ error: error });
        }
    }

    return (
        <Modal onClose={() => viewDispatch({ type: 'closeEditor', editTask: null })}>
            <div className="editor">
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <label className="label" htmlFor="title">
                            Title
                        </label>
                        <input
                            className="form-input"
                            type="text"
                            name="title"
                            id="title"
                            ref={inputTitle}
                            required
                        />
                    </div>
                    <div style={isNewList() ? { opacity: 0.5 } : {}}>
                        <label className="label">Select List</label>
                        <FormSelect
                            currentValue={editorState.selectValue}
                            options={listNames}
                            isDisabled={isNewList()}
                            onChange={(listName) => {
                                setEditorState((prev: EditorState) => ({
                                    ...prev,
                                    selectValue: listName,
                                }));
                            }}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="title">
                            Add New List
                        </label>
                        <input
                            className="form-input"
                            type="text"
                            name="list"
                            id="list"
                            ref={inputList}
                            onChange={(e: FormEvent) => {
                                setEditorState((prev: EditorState) => ({
                                    ...prev,
                                    newList: (e.target as HTMLInputElement).value,
                                }));
                            }}
                            pattern=".*\S.*"
                            required={isNewList()}
                        />
                    </div>
                    <button className="btn-primary" type="submit">
                        Save
                    </button>
                </form>
            </div>
        </Modal>
    );
}

export default Editor;
