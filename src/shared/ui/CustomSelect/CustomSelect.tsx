import { FC, useState } from "react"
import styles from "./CustomSelect.module.css"
import { IOptions } from "../../../types/types"

interface CustomSelectProps {
    options: IOptions[];
    name: string;
    hint: string;
    onSelect: (value: string, name: string) => void;
}

export const CustomSelect: FC<CustomSelectProps> = ({options, name, hint, onSelect}) => {
    const [selectedValue, setSelectedValue] = useState('')

    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value
        setSelectedValue(value)
        onSelect(value, name)
    };

    return (
        <select 
            className={styles.customSelect} 
            name={name} 
            onChange={onChangeHandler}
            value={selectedValue}
        >
            <option disabled value=''>{hint}</option>

            {options.map((option) => {
                return <option value={option.value} key={option.value}>{option.text}</option>
            })}
        </select>
    )
}