import { FC, useEffect, useState } from "react"
import styles from "./ProfilePage.module.css"
import { useDispatch, useSelector } from "react-redux"
import { selectIsAuth, selectUsername } from "../../state/selectors/authSelector"
import { fetchCvs, fetchInvitations, fetchProjects, fetchRequests, fetchUser } from "../../state/slices/userSlice"
import { selectUser, selectUserInvitations, selectUserRequests } from "../../state/selectors/userSelector"
import { Card } from "../../shared/ui/Card/Card"
import { selectAllProjects } from "../../state/selectors/projectsSelector"
import { IProjectCard } from "../../types/types"
import { fetchAllProjects } from "../../state/slices/projectsSlice"
import { useNavigate } from "react-router-dom"
import { selectAllCards } from "../../state/selectors/cardSelector"
import { fetchCards } from "../../state/slices/cardSlice"

export const ProfilePage: FC = () => {
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let username = useSelector(selectUsername)

    let allCvs = useSelector(selectAllCards)

    let userCvs = allCvs.filter((cv) => {
        return cv.login === username
    })

    const user = {
        login: userCvs[0].login,
        password: userCvs[0].password,
        fullName: userCvs[0].fullName,
        speciality: userCvs[0].profession,
        course: userCvs[0].course,
        contact: userCvs[0].contactInfo,
        id: userCvs[0].userId
    }

    let allProjects = useSelector(selectAllProjects)
    let userProjects = allProjects.filter((project) => {
        return project.userId === user?.id
    })
    let invitations = useSelector(selectUserInvitations)
    let projectRequests = useSelector(selectUserRequests)

    useEffect(() => {
        if (username) {
            dispatch(fetchUser({ username: username }))
            dispatch(fetchCvs({ login: username }))
            dispatch(fetchProjects({ login: username }))
            dispatch(fetchInvitations({ login: username }))
            dispatch(fetchRequests({ login: username }))
            dispatch(fetchAllProjects())
            dispatch(fetchCards())
        }
    }, [dispatch, username]);

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
                                <p>Имя</p>
                                <p className={styles.userInfoItemValue}>{user?.fullName.split(' ')[0]}</p>
                            </div>
                            <div className={styles.userInfoItem}>
                                <p>Фамилия</p>
                                <p className={styles.userInfoItemValue}>{user?.fullName.split(' ')[1]}</p>
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

                        <div className={styles.grid}>

                            <div className={styles.cvs}>
                                <div className={styles.flexbox}>
                                    <h1>Мои резюме</h1>
                                    <p className={styles.addButton} onClick={() => navigate('/newCV')}>+</p>
                                </div>
                                {userCvs?.map((cv) => {
                                    return (
                                        <Card heading={cv.profession} navigateTo={`/cvs/${cv.id}`} key={cv.id}>
                                            <p>{cv.contactInfo}</p>
                                        </Card>
                                    )
                                })}
                            </div>

                            <div className={styles.projects}>
                                <div className={styles.flexbox}>
                                    <h1>Мои проекты</h1>
                                    <p className={styles.addButton} onClick={() => navigate('/newProject')}>+</p>
                                </div>
                                {userProjects.map((project) => {
                                    return (
                                        <Card heading={project.name} navigateTo={`/projects/${project.name}`} key={project.id}>
                                            <p>{project.description}</p>
                                        </Card>
                                    )
                                })}
                            </div>

                            {/* <div className={styles.requests}>
                                <h1>Заявки</h1>
                                {projectRequests?.map((request) => {
                                    return (
                                        <Card heading={`От кого: ${request.from}`} navigateTo="/smwhr">
                                            <p>На проект: {findProjectNameById(request.projectId, userProjects)}</p>
                                        </Card>
                                    )
                                })}
                            </div>

                            <div className={styles.invitations}>
                                <h1>Приглашения</h1>
                                {invitations?.map((invite) => {
                                    return (
                                        <Card heading={`От кого: ${invite.from}`} navigateTo="/smwhr">
                                            <p>На проект: {findProjectNameById(invite.projectId, allProjects)}</p>
                                        </Card>
                                    )
                                })}
                            </div> */}
                        </div>

                    </div>
                    :
                    <h1>Anauthorized</h1>
            }
        </>
    )
}