import { useRef, FormEvent } from 'react';
import { useDataService } from '@/services/useDataService';
import { TaskCreate } from '@/services/DataService.types';
import '@/components/editor/Editor.styles.scss';

function Editor() {
    const { addTask } = useDataService();
    const inputTitle = useRef<HTMLInputElement | null>(null);

    /**
     *
     */
    function handleSubmit(e: FormEvent): void {
        e.preventDefault();
        const itemData: TaskCreate = {
            title: (inputTitle.current?.value as string).trim(),
            list: 'Default',
            completed: false,
        };

        addTask(itemData)
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
