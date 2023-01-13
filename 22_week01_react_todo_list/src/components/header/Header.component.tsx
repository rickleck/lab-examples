import '@/components/header/Header.styles.scss';
import { DataContext } from '@/data/Data.context';
import { useContext, useEffect } from 'react';
import { useViewState } from '@/states/view/View.context';
import { useDataSaver } from '@/data/hooks/useDataSaver.hook';
import { useDataUtils } from '@/data/hooks/useDataUtils.hook';
import { useErrorDispatch } from '@/states/error/Error.context';
import FormSelect from '@/components/common/FormSelect.component';

/**
 *
 */
function Header(): JSX.Element {
    const { removeList } = useDataSaver();
    const { getTaskIdList } = useDataUtils();
    const errorDispatch = useErrorDispatch();
    const { listNames, status, currentTaskList } = useContext(DataContext);
    const [viewState, viewDispatch] = useViewState();

    useEffect(() => {
        // Selected initial list when app starts or when an initial list is added
        if (viewState.currentListName === '' && status === 'success' && listNames.length > 0) {
            viewDispatch({ type: 'changeList', listName: listNames[0] });
        }
    }, [status]);

    /**
     *
     */
    function handleRemoveList(): void {
        // Remove list
        removeList(getTaskIdList(currentTaskList))
            .then(() => {
                // Change to another list if one exists
                const listName =
                    listNames.filter((name: string) => name !== viewState.currentListName)[0] || '';
                viewDispatch({ type: 'changeList', listName });
            })
            .catch((error: any) => errorDispatch({ error: error }));
    }

    /**
     *
     */
    function disableSelect(): string {
        return listNames.length === 0 ? ' disabled' : '';
    }

    return (
        <header className="header">
            <p className="title">Todo</p>
            <div className="list-select">
                <FormSelect
                    onChange={(listName) => viewDispatch({ type: 'changeList', listName })}
                    options={listNames}
                    isDisabled={listNames.length === 0}
                    placeHolder={status === 'success' ? 'No lists found' : ''}
                    currentValue={viewState.currentListName}
                />
                <div className={`btn-delete-container${disableSelect()}`}>
                    <button
                        onClick={handleRemoveList}
                        className={`material-symbols-outlined btn-icon-primary${disableSelect()}`}
                        title="Delete list"
                    >
                        do_not_disturb_on
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
