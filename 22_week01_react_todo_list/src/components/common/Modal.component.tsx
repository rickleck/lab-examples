import '@/components/common/Modal.styles.scss';
import { PropsWithChildren, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
/**
 *
 */
type ModalProps = PropsWithChildren & {
    onClose: () => void;
};

/**
 *
 */
function Modal({ onClose, children }: ModalProps) {
    const contentRef = useRef(null);
    return (
        <div className="modal">
            <div className="modal-bg" onClick={onClose}></div>
            <CSSTransition
                nodeRef={contentRef}
                in={true}
                timeout={300}
                classNames="modal"
                appear={true}
            >
                <div className="modal-children-container" ref={contentRef}>
                    {children}
                    <button
                        className="material-symbols-outlined btn-icon-light modal-btn-close"
                        onClick={onClose}
                    >
                        cancel
                    </button>
                </div>
            </CSSTransition>
        </div>
    );
}

export default Modal;
