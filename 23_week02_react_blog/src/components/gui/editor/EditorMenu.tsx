import { appRoutes } from '@/router/appRouter';
import { BlogPostData } from '@/types/BlogPostData';
import { RouteID } from '@/types/RouteID';
import { NavLink } from 'react-router-dom';

type EditorMenutProps = {
    items: BlogPostData[];
};

function EditorMenu({ items }: EditorMenutProps) {
    return (
        <div className="editor-menu">
            <ul>
                {items.map((item: BlogPostData) => (
                    <li key={item.id}>
                        <NavLink to={appRoutes.get(RouteID.ADMIN)?.path + item.id}>
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EditorMenu;
