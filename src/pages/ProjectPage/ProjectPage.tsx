import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectIsAuth } from "../../state/selectors/authSelector";
import { selectProject } from "../../state/selectors/projectPageSelector";
import { fetchProject } from "../../state/slices/projectPageSlice";
import { CustomButton } from "../../shared/ui/CustomButton/CustomButton";
import styles from "./ProjectPage.module.css"

export const ProjectPage: FC = () => {
    const dispatch = useDispatch()
    const project = useSelector(selectProject)
    const navigate = useNavigate()
    const isAuth = useSelector(selectIsAuth)

    type ProjectPageParams = {
        id: string;
    }

    const params = useParams<ProjectPageParams>()

    useEffect(() => {
        if (params.id) {
            dispatch(fetchProject(Number(params.id)))
        }
    }, [params.id])

    return (
        <>
            <div className={styles.projectInfo}>
                <div className={styles.projectInfoItem}>
                    <h1>{project?.name}</h1>
                    <p>{project?.description}</p>
                </div>
                <div className={styles.projectInfoItem}>
                    <h1>Контакты участников</h1>
                    <p>{project?.contacts.join(' ')}</p>
                </div>
                <div className={styles.projectInfoItem}>
                    <h1>Мы ищем</h1>
                    <p>{project?.needs.join(' ')}</p>
                </div>
            </div>

                {
                    isAuth ?
                        <div className={styles.blockButtons}>
                            <CustomButton
                                color="dark"
                                onClick={() => console.log('')}
                            >
                                Откликнуться
                            </CustomButton>
                            <CustomButton
                                color="dark"
                                onClick={() => navigate(-1)}
                            >
                                Назад
                            </CustomButton>
                        </div>
                        :
                    <div className={styles.blockButtons}>
                        <CustomButton
                            color="dark"
                            onClick={() => navigate(-1)}
                        >
                            Назад
                        </CustomButton>
                    </div>
                }
        </>
    )
}