import { FC } from "react";
import { Filters } from "./ui/Filters/Filters";
import { ProjectsList } from "./ui/ProjectsList/ProjectsList";
import styles from "./ProjectsPage.module.css"

export const ProjectsPage: FC = () => {
    return (
        <>
            <h1 className={styles.pageHeading}>Доступные проекты</h1>
            <div className={styles.mainContent}>
                <Filters />
                <ProjectsList />
            </div>
        </>
    )
}