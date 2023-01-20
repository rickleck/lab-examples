import { BlogPostData } from '@/types/BlogPostData';
import { useLoaderData } from 'react-router-dom';
import BlogPostList from '@/components/gui/blogpostlist/BlogPostList';
import Hero from '@/components/gui/hero/Hero';
import { RouteID } from '@/types/RouteID';
import { useEffect } from 'react';
import { useLogMountStatus } from '@/utils/dev/useLogMountStatus';

function StartView(): JSX.Element {
    const items = useLoaderData() as BlogPostData[];

    useLogMountStatus('start view');

    return (
        <div className="index-view view-padding">
            <Hero />
            <section className="page-grid">
                <div className="spacing"></div>
                <BlogPostList items={items} />
            </section>
        </div>
    );
}

export default StartView;
