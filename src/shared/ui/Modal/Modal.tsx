import { FC, ReactNode } from "react";
import { CustomButton } from "../CustomButton/CustomButton";
import styles from "./Modal.module.css"

interface ModalProps {
    children: ReactNode;
    buttonText: string;
    header: string;
    visible: boolean;
    setVisible: () => void;
    onClickAction: () => void
}

export const Modal: FC<ModalProps> = ({ children, buttonText, header, visible, setVisible, onClickAction }) => {
    const classes = visible === true ? `${styles.modalArea} + ' ' ${styles.modalActive}` : styles.modalArea

    return (
        <div className={classes} onClick={() => setVisible()}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h1>{header}</h1>
                </div>

                <div className={styles.content}>
                    {children}
                </div>

                <CustomButton
                    onClick={() => onClickAction()}
                    color="light"
                >
                    {buttonText}
                </CustomButton>
            </div>
        </div>
    )
}