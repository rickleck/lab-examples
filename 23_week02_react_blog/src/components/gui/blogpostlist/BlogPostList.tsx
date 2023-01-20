import { appRoutes } from '@/router/appRouter';
import { BlogPostData } from '@/types/BlogPostData';
import { RouteID } from '@/types/RouteID';
import { Link } from 'react-router-dom';

type BlogPostListProps = {
    items: BlogPostData[];
};

function BlogPostList({ items }: BlogPostListProps): JSX.Element {
    return (
        <div className="border-dev-white">
            <ul>
                {items.map((item: BlogPostData) => (
                    <li key={item.id}>
                        <Link to={appRoutes.get(RouteID.POST)!.path + item.id}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BlogPostList;
