import { FC, useEffect } from "react"
import { IProjectCard } from "../../../../types/types"
import { selectAllProjects } from "../../../../state/selectors/projectsSelector"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProjects } from "../../../../state/slices/projectsSlice"
import { Card } from "../../../../shared/ui/Card/Card"
import styles from "./ProjectsList.module.css"


export const ProjectsList: FC = () => {
    // достаем все карточки
    const projects: IProjectCard[] = useSelector(selectAllProjects)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProjects())
    }, [dispatch])

    return (
        <div className={styles.projectsList}>
            {projects.map((project) => {

                return (
                    <Card heading={project.name} navigateTo={`/projects/${project.id}`} key={project.id}>
                        <div className={styles.needs}>
                            Нужны: {project.needs.join(' ')}
                        </div>
                        <p>{project.course}</p>
                        <p>Связь: {project.contacts[0]}</p>
                    </Card>
                )
            })}
        </div>
    )
}