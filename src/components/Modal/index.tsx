import styles from './Modal.module.scss';
import { Dispatch, SetStateAction } from "react";

type ModalProps = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;

    overlayClass?: string;
    containerClass?: string;

    children: React.ReactNode,
}

export const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen, overlayClass, containerClass, children }) =>
{
    return (
        <div
            className={`${styles.overlay} ${overlayClass ? overlayClass : ''}`}
            style={{ display: isOpen ? 'flex' : 'none', }}
            onClick={() => setIsOpen(false)}
        >
            <div
                className={`${styles.container} ${containerClass ? containerClass : ''}`}
                onClick={e => e.stopPropagation()}
            >
                { children }
            </div>
        </div>
    );
}
