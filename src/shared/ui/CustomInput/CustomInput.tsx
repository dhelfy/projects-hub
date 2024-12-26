import { FC } from "react";
import styles from "./CustomInput.module.css"

interface CustomInputProps {
    type: string;
    placeholder?: string;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    disabled?: boolean;
    min?: string;
    max?: string;
}

export const CustomInput: FC<CustomInputProps> = ({type, placeholder, name, onChange, value, disabled, min, max}) => {
    return (
        <input type={type} placeholder={placeholder} name={name} className={styles.input} onChange={onChange} value={value} disabled={disabled} min={min} max={max}/>
    )
}