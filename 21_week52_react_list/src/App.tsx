import { useState } from 'react';
import data from './assets/data/latest.json';
import NavBar from './components/navbar/NavBar';
import RecordList from './components/recordlist/RecordList';
import type { Record } from './components/recordlist/types';

/**
 *
 */
function App(): JSX.Element {
    const [listData] = useState<Record[]>(data);

    return (
        <div className="App">
            <NavBar />
            <RecordList listData={listData} />
        </div>
    );
}

export default App;
