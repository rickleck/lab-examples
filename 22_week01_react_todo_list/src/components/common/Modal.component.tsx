import '@/components/common/Modal.styles.scss';
import { useAddClassNextFrame } from '@/hooks/useAddClassNextFrame.hook';
import { CSSProperties, PropsWithChildren, useRef } from 'react';
/**
 *
 */
type ModalProps = PropsWithChildren & {
    onClose(): void;
    extraStyles?: CSSProperties;
};

/**
 *
 */
function Modal({ onClose, children, extraStyles = {} }: ModalProps): JSX.Element {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const bgRef = useRef<HTMLDivElement | null>(null);

    useAddClassNextFrame(bgRef, 'fade-in');
    useAddClassNextFrame(contentRef, 'slide-in');

    return (
        <div className="modal">
            <div className="modal-bg" ref={bgRef} onClick={onClose}></div>

            <div className="modal-children-container" ref={contentRef} style={extraStyles}>
                {children}
                <button
                    className="material-symbols-outlined btn-icon-light modal-btn-close"
                    onClick={onClose}
                >
                    cancel
                </button>
            </div>
        </div>
    );
}

export default Modal;
