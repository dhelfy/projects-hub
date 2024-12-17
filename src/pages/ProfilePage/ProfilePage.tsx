import { FC, useEffect, useState } from "react"
import styles from "./ProfilePage.module.css"
import { useDispatch, useSelector } from "react-redux"
import { selectIsAuth, selectUsername } from "../../state/selectors/authSelector"
import { fetchCvs, fetchProjects, fetchUser, updateTelegram } from "../../state/slices/userSlice"
import { selectUser, selectUserCvs, selectUserProjects } from "../../state/selectors/userSelector"
import { CustomInput } from "../../shared/ui/CustomInput/CustomInput"
import { Card } from "../../shared/ui/Card/Card"

export const ProfilePage: FC = () => {
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch()
    let username = useSelector(selectUsername)
    let user = useSelector(selectUser)
    let cvs = useSelector(selectUserCvs)
    let projects = useSelector(selectUserProjects)
    let [telegram, setTelegram] = useState('')
    let [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        if (username) {
            dispatch(fetchUser({ username: username }))
            dispatch(fetchCvs({ login: username }))
            dispatch(fetchProjects({ login: username }))
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
                                <h1>Мои резюме</h1>
                                {cvs?.map((cv) => {
                                    return (
                                        <Card heading={cv.speciality} navigateTo="/smwhr" key={cv.id}>
                                            <p>Обновлено {cv.updateDate}</p>
                                        </Card>
                                    )
                                })}
                            </div>

                            <div>
                                <h1>Мои проекты</h1>
                                {projects?.map((project) => {
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
                            </div>

                            <div>
                                <h1>Приглашения</h1>
                            </div>
                        </div>
                    </div>
                    :
                    <h1>Anauthorized</h1>
            }
        </>
    )
}