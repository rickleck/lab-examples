import { appRoutes } from '@/router/appRoutes';
import { RecordData } from '@/data/types/RecordData';
import { NavLink } from 'react-router-dom';

type EditorMenutProps = {
    items: RecordData[];
};

function EditorMenu({ items }: EditorMenutProps) {
    return (
        <div className="editor-menu">
            <ul>
                {items.map((item: RecordData) => (
                    <li key={item.id}>
                        <NavLink to={appRoutes.ADMIN + item.id}>{item.album}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EditorMenu;
