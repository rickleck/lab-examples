import '@/components/header/Header.styles.scss';
import { DataContext } from '@/data/Data.context';
import { useContext } from 'react';
import FormSelect from '@/components/common/FormSelect.component';
import { useViewState } from '../main/states/view/View.context';

/**
 *
 */
function Header(): JSX.Element {
    const { listNames } = useContext(DataContext);
    const [viewState, viewDispatch] = useViewState();
    return (
        <header className="header">
            <h2>Header</h2>
            <button
                className="btn-primary"
                onClick={() => viewDispatch({ type: 'openEditor', editTask: null })}
            >
                Add
            </button>
            <FormSelect
                options={listNames}
                currentValue={viewState.currentList}
                onChange={(listName) => viewDispatch({ type: 'changeList', listName })}
            />
        </header>
    );
}

export default Header;
