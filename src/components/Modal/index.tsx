import styles from './Modal.module.scss';
import { Dispatch, SetStateAction } from "react";

export type ModalProps = {
    isOpen: boolean;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    onRequestClose?: Function;

    overlayClass?: string;
    containerClass?: string;

    children: React.ReactNode,
}

export const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen, onRequestClose, overlayClass, containerClass, children }) =>
{
    return (
        <div
            className={`${styles.overlay} ${overlayClass ? overlayClass : ''}`}
            style={{ display: isOpen ? 'flex' : 'none', }}
            onClick={() => {
                if(onRequestClose)
                    onRequestClose();
                if(setIsOpen)
                    setIsOpen(false);
            }}
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
