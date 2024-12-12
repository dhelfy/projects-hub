import { FC, useState } from "react"
import styles from "./CustomSelect.module.css"
import { IOptions } from "../../../types/types"
import { useDispatch } from "react-redux";
import { setSelectValue } from "../../../state/slices/filterSlice";
import { setFilter } from "../../../state/slices/cardSlice";

interface CustomSelectProps {
    options: IOptions[];
    name: string;
    hint: string;
}

export const CustomSelect: FC<CustomSelectProps> = ({options, name, hint}) => {
    const [selectedValue, setSelectedValue] = useState('')
    const dispatch = useDispatch()

    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSelectValue({name: name, value: e.currentTarget.value}))
        dispatch(setFilter({name: name, value: e.currentTarget.value}))
        setSelectedValue(e.currentTarget.value)
    }

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