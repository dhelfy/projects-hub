import { FC } from "react"
import { CustomSelect } from "../../../../shared/ui/CustomSelect/CustomSelect"
import { useDispatch, useSelector } from "react-redux"
import { selectAllOptions } from "../../../../state/selectors/filterSelector"
import styles from "./Filters.module.css"
import { setSelectValue } from "../../../../state/slices/filterSlice"
import { setFilter } from "../../../../state/slices/projectsSlice"

export const Filters: FC = () => {
    const options = useSelector(selectAllOptions)
    const dispatch = useDispatch()

    const onSelectHandler = (value: string, filterName: string) => {
        dispatch(setSelectValue({ name: filterName, value }))
        dispatch(setFilter({ name: filterName, value }))
    }

    return (
        <div className={styles.filtersBlock}>
            <h1>Фильтры</h1>
            <CustomSelect
                options={options.needsOptions}
                name="needs"
                hint="Кто требуется"
                onSelect={onSelectHandler}
            />
            <CustomSelect
                options={options.courseOptions}
                name="course"
                hint="Курс"
                onSelect={onSelectHandler}
            />
            <CustomSelect
                options={options.noveltyOptions}
                name="novelty"
                hint="По новизне"
                onSelect={onSelectHandler}
            />
        </div>
    )
}