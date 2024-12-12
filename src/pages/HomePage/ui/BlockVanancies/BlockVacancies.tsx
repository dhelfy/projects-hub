import { CardList } from "../../../../shared/ui/CardList/CardList"
import { CustomSelect } from "../../../../shared/ui/CustomSelect/CustomSelect"
import { selectAllOptions } from "../../../../state/selectors/filterSelector"
import { useSelector } from "react-redux"
import styles from "./BlockVacancies.module.css"

export const BlockVacancies = () => {
    const options = useSelector(selectAllOptions)

    return (
        <div className={styles.blockVacancies}>
            <h1 id="vacancies-header">Доступные вакансии</h1>

            <div className={styles.blockFilters}>
                <CustomSelect
                    options={options.specialityOptions}
                    name="speciality"
                    hint="Специальность"
                />
                <CustomSelect
                    options={options.courseOptions}
                    name="course"
                    hint="Курс"
                />
                <CustomSelect
                    options={options.noveltyOptions}
                    name="novelty"
                    hint="По новизне"
                />
            </div>

            <CardList />
        </div>
    )
}