import { RecordData } from '@/app/features/records/recordsTypes';
import { appRoutes } from '@/router/appRouterConfig';
import { FormEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { editorConfig } from './editorConfig';

/**
 *
 */
type EditorMenutProps = {
    items: RecordData[];
    activeID: string | null;
};

/**
 *
 */
function EditorMenu({ items, activeID }: EditorMenutProps) {
    const config = editorConfig();
    const navigate = useNavigate();

    /**
     *
     */
    function handleSelect(e: FormEvent): void {
        const id = (e.target as HTMLOptionElement).value;
        navigate(appRoutes.ADMIN + id);
    }

    return (
        <div className="editor-menu">
            <NavLink
                to={appRoutes.ADMIN + config.ADD_ITEM_ID}
                type="button"
                className="btn-primary btn-new"
            >
                Add New
            </NavLink>
            <div className="menu-list">
                {items.map((item: RecordData) => (
                    <NavLink
                        className="menu-list-item hover-anim-horz elipsis-one-line"
                        key={item.id}
                        to={appRoutes.ADMIN + item.id}
                    >
                        {item.album}
                    </NavLink>
                ))}
            </div>
            <select
                onChange={handleSelect}
                className="menu-select input-select"
                value={activeID || 'default'}
            >
                <option disabled value="default" key="default">
                    Edit entry...
                </option>
                {items.map((item: RecordData) => (
                    <option value={item.id} key={item.id}>
                        {item.album}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default EditorMenu;
