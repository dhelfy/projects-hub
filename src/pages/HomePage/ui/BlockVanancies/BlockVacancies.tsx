import { CardList } from "../../../../shared/ui/CardList/CardList"
import { CustomSelect } from "../../../../shared/ui/CustomSelect/CustomSelect"
import { selectAllOptions } from "../../../../state/selectors/filterSelector"
import { useDispatch, useSelector } from "react-redux"
import styles from "./BlockVacancies.module.css"
import { setSelectValue } from "../../../../state/slices/filterSlice"
import { setFilter } from "../../../../state/slices/cardSlice"

export const BlockVacancies = () => {
    const options = useSelector(selectAllOptions)
    const dispatch = useDispatch()


    const onSelectHandler = (value: string, filterName: string) => {
        dispatch(setSelectValue({ name: filterName, value }))
        dispatch(setFilter({ name: filterName, value }))
    }

    return (
        <div className={styles.blockVacancies}>
            <h1 id="vacancies-header">Доступные вакансии</h1>

            <div className={styles.blockFilters}>
                <CustomSelect
                    options={options.specialityOptions}
                    name="speciality"
                    hint="Специальность"
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

            <CardList />
        </div>
    )
}