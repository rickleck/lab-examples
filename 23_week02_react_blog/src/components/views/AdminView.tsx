import React, { useEffect } from 'react';
import Editor from '@/components/gui/editor/Editor';
import { useLoaderData, useParams } from 'react-router-dom';
import { BlogPostData } from '@/types/BlogPostData';
import { useLogMountStatus } from '@/utils/dev/useLogMountStatus';
import HomeButton from '../gui/common/HomeButton';

function AdminView() {
    const items = useLoaderData() as BlogPostData[];
    const activeID = useParams().id;

    useLogMountStatus('admin view: ' + activeID);

    return (
        <div>
            <HomeButton />
            <Editor items={items} activeID={activeID} />
        </div>
    );
}

export default AdminView;
