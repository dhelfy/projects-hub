import { FC, ReactNode } from "react";
import styles from "./CustomButton.module.css"

interface CustomButtonProps {
    children: ReactNode;
    onClick: () => void;
    color: "light" | "dark"
}

export const CustomButton: FC<CustomButtonProps> = ({children, onClick, color}) => {
    const buttonColor = color === "light" ? styles.customButtonLight : styles.customButtonDark

    return (
        <button className={buttonColor} onClick={onClick}>
            {children}
        </button>
    )
}