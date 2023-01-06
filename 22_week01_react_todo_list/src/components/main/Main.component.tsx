import React from 'react';
import List from '@/components/list/List.component';
import Editor from '@/components//editor/Editor.component';

function Main(): JSX.Element {
    return (
        <main>
            <List />
            <Editor />
        </main>
    );
}

export default Main;
