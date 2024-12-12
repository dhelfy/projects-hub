import { FC } from "react";
import styles from "./CustomInput.module.css"

interface CustomInputProps {
    type: string;
    placeholder?: string;
    name?: string;
}

export const CustomInput: FC<CustomInputProps> = ({type, placeholder, name}) => {
    return (
        <input type={type} placeholder={placeholder} name={name} className={styles.input}/>
    )
}