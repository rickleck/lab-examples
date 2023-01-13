import '@/components/footer/Footer.styles.scss';
import { useContext } from 'react';
import { ViewStateContext } from '@/states/view/View.context';

function Footer() {
    const [{}, viewDispatch] = useContext(ViewStateContext);
    return (
        <div className="footer">
            <button
                className="material-symbols-outlined btn-add"
                onClick={() => viewDispatch({ type: 'openEditor', editTask: null })}
            >
                add
            </button>
        </div>
    );
}

export default Footer;
