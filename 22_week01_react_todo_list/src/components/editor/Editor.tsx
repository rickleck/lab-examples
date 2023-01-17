import '@/components/editor/Editor.scss';
import { useRef, FormEvent, useContext, useEffect, useState } from 'react';
import { TaskUpdate } from '@/data/DataTypes';
import { useDataSaver } from '@/data/utils/useDataSaver';
import { getListByName, getTaskIdList } from '@/data/utils/dataUtils';
import { DataContext } from '@/data/DataContext';
import { EditorState } from '@/components/editor/EditorTypes';
import { useErrorDispatch } from '@/states/error/ErrorContext';
import { ViewContext } from '@/states/view/ViewContext';
import Modal from '@/components/common/Modal';
import FormSelect from '@/components/common/FormSelect';

/**
 *
 */
function Editor(): JSX.Element {
    const errorDispatch = useErrorDispatch();
    const dataSaver = useDataSaver();
    const { allTasks, listNames } = useContext(DataContext);
    const [viewState, viewDispatch] = useContext(ViewContext);
    const [editorState, setEditorState] = useState({
        isSaving: false,
        newList: '',
        selectValue: viewState.currentListName,
    });
    const inputTitle = useRef<HTMLInputElement | null>(null);

    /**
     *
     */
    useEffect(() => {
        // Populate title input if editing existing task
        if (inputTitle.current) {
            viewState.editTask && (inputTitle.current.value = viewState.editTask.title);
            inputTitle.current?.focus();
        }
    }, []);

    /**
     *
     */
    function disableSelect(): boolean {
        return !!editorState.newList || listNames.length === 0;
    }

    /**
     *
     */
    async function handleSubmit(e: FormEvent): Promise<void> {
        e.preventDefault();

        // Return if task is already saving
        if (editorState.isSaving) return;
        // Set state to saving
        setEditorState((prev) => ({ ...prev, isSaving: true }));

        // Collect current values
        // Title
        const title = (inputTitle.current?.value as string).trim();
        // Listname, either new or existing
        const list = editorState.newList || editorState.selectValue;

        try {
            if (viewState.editTask) {
                // If editing an existing task
                // Compare current task to new values
                const changes = Object.fromEntries(
                    Object.entries({ title, list }).filter(
                        ([key, value]) => viewState.editTask![key as keyof TaskUpdate] !== value
                    )
                );
                // Save to db if any changes found
                if (Object.entries(changes).length > 0)
                    await dataSaver.updateTask(viewState.editTask.id, changes);
            } else {
                // Save a new task
                await dataSaver.addTask(
                    title,
                    list,
                    !editorState.newList ? getTaskIdList(getListByName(list, allTasks)) : undefined
                );
            }

            // If saved to a new / other list, switch to that list
            if (list !== viewState.currentListName)
                viewDispatch({ type: 'changeList', payload: { listName: list } });

            // Close editor
            viewDispatch({ type: 'closeEditor' });
        } catch (error: any) {
            // Reset saving state
            setEditorState((prev) => ({ ...prev, isSaving: false }));
            // Notify
            errorDispatch({ error: error });
        }
    }

    return (
        <Modal
            onClose={() => viewDispatch({ type: 'closeEditor' })}
            extraStyles={{ alignSelf: 'flex-start', marginTop: '190px' }}
        >
            <div className="editor bg-image">
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <label className="label" htmlFor="title">
                            Task
                        </label>
                        <input
                            className="form-input"
                            type="text"
                            name="title"
                            id="title"
                            ref={inputTitle}
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div style={disableSelect() ? { opacity: 0.5 } : {}}>
                        <label className="label">Select List</label>
                        <FormSelect
                            currentValue={editorState.selectValue}
                            placeHolder={'No lists found'}
                            options={listNames}
                            isDisabled={disableSelect()}
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
                            Add to New List
                        </label>
                        <input
                            className="form-input"
                            type="text"
                            name="list"
                            id="list"
                            onChange={(e: FormEvent) => {
                                setEditorState((prev: EditorState) => ({
                                    ...prev,
                                    newList: (e.target as HTMLInputElement).value,
                                }));
                            }}
                            pattern=".*\S.*"
                            required={!!editorState.newList}
                            autoComplete="off"
                        />
                    </div>
                    <div className="buttons">
                        <button
                            onClick={() => viewDispatch({ type: 'closeEditor' })}
                            className="btn-outline"
                            type="button"
                        >
                            Cancel
                        </button>
                        <button className="btn-outline" type="submit">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default Editor;
