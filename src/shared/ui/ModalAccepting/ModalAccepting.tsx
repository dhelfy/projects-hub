import { FC } from "react";
import { CustomButton } from "../CustomButton/CustomButton";
import styles from "./ModalAccepting.module.css"

interface ModalAcceptingProps {
    actionOneText: string;
    actionTwoText: string;
    header: string;
    visible: boolean;
    setVisible: () => void;
    actionOne: () => void;
    actionTwo: () => void;
}

export const ModalAccepting: FC<ModalAcceptingProps> = ({ actionOneText, actionTwoText, header, visible, setVisible, actionOne, actionTwo }) => {
    const classes = visible === true ? `${styles.modalArea} + ' ' ${styles.modalActive}` : styles.modalArea

    return (
        <div className={classes} onClick={() => setVisible()}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

                <div className={styles.header}>
                    <h1>{header}</h1>
                </div>

                <div className={styles.buttonsContainer}>
                    <CustomButton
                        onClick={() => actionOne()}
                        color="light"
                    >
                        {actionOneText}
                    </CustomButton>


                    <CustomButton
                        onClick={() => actionTwo()}
                        color="light"
                    >
                        {actionTwoText}
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}