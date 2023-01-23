import { useLoaderData, useParams } from 'react-router-dom';
import { useLogMountStatus } from '@/utils/dev/useLogMountStatus';
import { RecordData } from '@/data/types/RecordData';
import HomeButton from '../../gui/common/HomeButton';
import Editor from '@/components/gui/editor/Editor';

function Admin() {
    const items = useLoaderData() as RecordData[];
    const activeID = useParams().id;

    useLogMountStatus('admin view: ' + activeID);

    return (
        <div>
            <HomeButton />

            <Editor items={items} activeID={activeID} />
        </div>
    );
}

export default Admin;
