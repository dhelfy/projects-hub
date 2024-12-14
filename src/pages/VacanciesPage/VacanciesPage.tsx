import { FC } from "react";
import { CardList } from "../../shared/ui/CardList/CardList";
import { Filters } from "./ui/Filters/Filters";
import styles from "./VacanciesPage.module.css"

export const VacanciesPage: FC = () => {
    return (
        <>
            <h1 className={styles.pageHeading}>Доступные вакансии</h1>
            <div className={styles.mainContent}>
                <Filters />
                <CardList />
            </div>
        </>
    )
}