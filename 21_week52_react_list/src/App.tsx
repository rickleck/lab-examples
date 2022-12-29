import { useState } from 'react';
import purchaseList from './assets/data/purchases.json';
import RecordList from './components/recordlist/RecordList';

function App() {
    const [listData] = useState(purchaseList);

    return (
        <div className="App">
            <RecordList listData={listData} />
        </div>
    );
}

export default App;
