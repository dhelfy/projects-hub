import { FC, useEffect, useState } from "react"
import styles from "./ProfilePage.module.css"
import { useDispatch, useSelector } from "react-redux"
import { selectIsAuth, selectUsername } from "../../state/selectors/authSelector"
import { fetchCvs, fetchInvitations, fetchProjects, fetchRequests, fetchUser, updateTelegram } from "../../state/slices/userSlice"
import { selectUser, selectUserCvs, selectUserInvitations, selectUserProjects, selectUserRequests } from "../../state/selectors/userSelector"
import { CustomInput } from "../../shared/ui/CustomInput/CustomInput"
import { Card } from "../../shared/ui/Card/Card"
import { selectAllProjects } from "../../state/selectors/projectsSelector"
import { IProjectCard } from "../../types/types"
import { fetchAllProjects } from "../../state/slices/projectsSlice"

export const ProfilePage: FC = () => {
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch()
    let username = useSelector(selectUsername)
    let user = useSelector(selectUser)
    let cvs = useSelector(selectUserCvs)
    let userProjects = useSelector(selectUserProjects)
    let allProjects = useSelector(selectAllProjects)
    let invitations = useSelector(selectUserInvitations)
    let projectRequests = useSelector(selectUserRequests)
    let [telegram, setTelegram] = useState('')
    let [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        if (username) {
            dispatch(fetchUser({ username: username }))
            dispatch(fetchCvs({ login: username }))
            dispatch(fetchProjects({ login: username }))
            dispatch(fetchInvitations({ login: username }))
            dispatch(fetchRequests({ login: username }))
            dispatch(fetchAllProjects())
        }
    }, [dispatch, username]);

    useEffect(() => {
        if (user?.telegram) {
            setTelegram(user.telegram);
        }
    }, [user]);
    
    function onInputChange (e: React.ChangeEvent<HTMLInputElement>) {
        setTelegram(e.currentTarget.value)
    }

    function onSave() {
        if (user?.login) {
            dispatch(updateTelegram({ login: user.login, newTelegram: telegram }));
            setIsDisabled(true);
        }
    }

    function findProjectNameById(projectId: number, projectsArray: IProjectCard[]) {
        const project = projectsArray.find((project) => project.id === projectId)
        return project?.name
    }

    return (
        <>
            {
                isAuth
                    ?
                    <div>
                        <div className={styles.userInfo}>
                            <h1>Настройки</h1>
                            <div className={styles.userInfoItem}>
                                <p>Телеграм</p>
                                <CustomInput 
                                    type="text" 
                                    value={telegram}
                                    onChange={onInputChange}
                                    disabled={isDisabled}
                                />
                                {
                                    !isDisabled 
                                    ? 
                                    <p 
                                        className={styles.saveButton}
                                        onClick={() => onSave()}
                                    >
                                        Сохранить
                                    </p> 
                                    :                                 
                                    <p 
                                        className={styles.changeButton}
                                        onClick={() => setIsDisabled(!isDisabled)}
                                    >
                                        Изменить
                                    </p>  
                                }
                            </div>
                            <div className={styles.userInfoItem}>
                                <p>Имя</p>
                                <p className={styles.userInfoItemValue}>{user?.name}</p>
                            </div>
                            <div className={styles.userInfoItem}>
                                <p>Фамилия</p>
                                <p className={styles.userInfoItemValue}>{user?.lastname}</p>
                            </div>
                            <div className={styles.userInfoItem}>
                                <p>Специальность</p>
                                <p className={styles.userInfoItemValue}>{user?.speciality}</p>
                            </div>
                            <div className={styles.userInfoItem}>
                                <p>Курс</p>
                                <p className={styles.userInfoItemValue}>{user?.course}</p>
                            </div>
                        </div>

                        <div className={styles.cvsAndProjectsSection}>
                            <div>
                                <div className={styles.flexbox}>
                                    <h1>Мои резюме</h1>
                                    <p className={styles.addButton}>+</p>
                                </div>
                                {cvs?.map((cv) => {
                                    return (
                                        <Card heading={cv.speciality} navigateTo="/smwhr" key={cv.id}>
                                            <p>Обновлено {cv.updateDate}</p>
                                        </Card>
                                    )
                                })}
                            </div>

                            <div>
                                <div className={styles.flexbox}>
                                    <h1>Мои проекты</h1>
                                    <p className={styles.addButton}>+</p>
                                </div>
                                {userProjects?.map((project) => {
                                    return (
                                        <Card heading={project.name} navigateTo="/smwhr" key={project.id}>
                                            <p>Обновлено {project.updateDate}</p>
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>

                        <div className={styles.requestsAndIvitationsSection}>
                            <div>
                                <h1>Заявки</h1>
                                {projectRequests?.map((request) => {
                                    return (
                                        <Card heading={`От кого: ${request.from}`} navigateTo="/smwhr">
                                            <p>На проект: {findProjectNameById(request.projectId, userProjects)}</p>
                                        </Card>
                                    )
                                })}
                            </div>

                            <div>
                                <h1>Приглашения</h1>
                                {invitations?.map((invite) => {
                                    return (
                                        <Card heading={`От кого: ${invite.from}`} navigateTo="/smwhr">
                                            <p>На проект: {findProjectNameById(invite.projectId, allProjects)}</p>
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    :
                    <h1>Anauthorized</h1>
            }
        </>
    )
}