import '@/components/editor/Editor.styles.scss';
import { useRef, FormEvent, useContext } from 'react';
import { DataSubscription, Task } from '@/data/Data.types';
import { useDataSave } from '@/data/hooks/useDataSave.hook';
import { DataContext } from '@/data/Data.context';

function Editor(): JSX.Element {
    const { tasks } = useContext<DataSubscription>(DataContext);
    const { addTask } = useDataSave();
    const inputTitle = useRef<HTMLInputElement | null>(null);

    /**
     *
     */
    function handleSubmit(e: FormEvent): void {
        e.preventDefault();

        addTask(tasks, (inputTitle.current?.value as string).trim(), 'Default')
            .then(() => {
                if (inputTitle.current) inputTitle.current.value = '';
            })
            .catch((error) => console.log(error));
    }

    return (
        <div className="editor">
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label className="label" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="input-text"
                        type="text"
                        name="title"
                        id="title"
                        ref={inputTitle}
                        required
                    />
                </div>
                <button className="btn-primary" type="submit">
                    Save
                </button>
            </form>
        </div>
    );
}

export default Editor;
