import { RouteID } from '@/types/RouteID';
import { useEffect } from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import HomeButton from '@/components/gui/common/HomeButton';
import { BlogPostData } from '@/types/BlogPostData';
import { useLogMountStatus } from '@/utils/dev/useLogMountStatus';

function BlogPostView() {
    const data = useRouteLoaderData(RouteID.POST) as BlogPostData;

    useLogMountStatus('blog post view');

    return (
        <div>
            <HomeButton />
            <p>{data.title}</p>
        </div>
    );
}

export default BlogPostView;
