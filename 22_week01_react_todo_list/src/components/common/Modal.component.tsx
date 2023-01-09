import '@/components/common/Modal.styles.scss';
import { PropsWithChildren } from 'react';

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
    return (
        <div className="modal">
            <div className="modal-bg" onClick={onClose}></div>
            <div className="modal-children-container">
                {children}
                <button className="modal-btn-close" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <path
                            fill="black"
                            d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Modal;
