import '@/components/header/Header.scss';
import { DataContext } from '@/data/DataContext';
import { useContext, useEffect, useRef } from 'react';
import { useViewState } from '@/states/view/ViewContext';
import { useDataSaver } from '@/data/utils/useDataSaver';
import { getTaskIdList } from '@/data/utils/dataUtils';
import { useErrorDispatch } from '@/states/error/ErrorContext';
import { useAddClassNextFrame } from '@/utils/useAddClassNextFrame';
import FormSelect from '@/components/common/FormSelect';

/**
 *
 */
function Header(): JSX.Element {
    const errorDispatch = useErrorDispatch();
    const dataSaver = useDataSaver();
    const { listNames, status, currentTaskList } = useContext(DataContext);
    const [viewState, viewDispatch] = useViewState();
    const titleRef = useRef<HTMLDivElement | null>(null);
    const navRef = useRef<HTMLDivElement | null>(null);
    const loaderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Check current liststatus
        if (listNames.length > 0 && currentTaskList.length === 0) {
            viewDispatch({
                type: 'changeList',
                listName: listNames[0],
            });
        }
    }, [currentTaskList, listNames]);

    //Animate in
    useAddClassNextFrame(loaderRef, 'fade-in');
    useAddClassNextFrame(loaderRef, 'fade-out', status === 'success');
    useAddClassNextFrame(titleRef, 'fade-in', status === 'success');
    useAddClassNextFrame(navRef, 'fade-in', status === 'success');

    /**
     *
     */
    function handleRemoveList(): void {
        dataSaver
            .removeList(getTaskIdList(currentTaskList))
            .catch((error: any) => errorDispatch({ error: error }));
    }

    /**
     *
     */
    function disableSelect(): string {
        return listNames.length === 0 ? ' disabled' : '';
    }

    return (
        <header className="header bg-image">
            <div className="loader" ref={loaderRef}></div>
            <p ref={titleRef} className="title">
                Todo
            </p>
            <nav ref={navRef} className="navigation">
                <div className="list-select">
                    <FormSelect
                        onChange={(listName) =>
                            viewDispatch({
                                type: 'changeList',
                                listName,
                            })
                        }
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
                <button
                    onClick={() => viewDispatch({ type: 'openEditor', editTask: null })}
                    className="material-symbols-outlined btn-add"
                    title="Add a task"
                >
                    add
                </button>
            </nav>
        </header>
    );
}

export default Header;
