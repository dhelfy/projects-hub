import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, selectUsername } from "../../state/selectors/authSelector";
import { selectUser } from "../../state/selectors/userSelector";
import { fetchUser } from "../../state/slices/userSlice";
import { CustomInput } from "../../shared/ui/CustomInput/CustomInput";
import { CustomButton } from "../../shared/ui/CustomButton/CustomButton";
import { ILink } from "../../types/types";
import styles from "./CreateCVPage.module.css"

export const CreateCVPage: FC = () => {
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch()
    let username = useSelector(selectUsername)
    let user = useSelector(selectUser)
    let [links, setLinks] = useState<ILink[]>([])
    let [newLink, setNewLink] = useState('')
    let [telegram, setTelegram] = useState('')

    useEffect(() => {
        dispatch(fetchUser({username: username}))
    }, [dispatch, username])

    const addNewLink = (newLink: string) => {
        if (newLink.includes('github')) {
            setLinks([...links, {name: 'GitHub', link: newLink}])
        } else if (newLink.includes('linktr.ee')) {
            setLinks([...links, {name: 'Linktree', link: newLink}])
        } else if (newLink.includes('behance')) {
            setLinks([...links, {name: 'Behance', link: newLink}])
        } else if (newLink.includes('linkedin')) {
            setLinks([...links, {name: 'Linkedin', link: newLink}])
        } else {
            alert('Сайта нет в списке доступных')
        }
    }

    const removeLink = (name: string) => {
        setLinks(links.filter((link: ILink) => link.name !== name));
    }

    return (
        <>
            {
                isAuth
                    ?
                    <div className={styles.cvForm}>
                        <div className={styles.cvItem}>
                            <h1>Имя</h1>
                            <p>{user?.name}</p>
                        </div>
                        <div className={styles.cvItem}>
                            <h1>Фамилия</h1>
                            <p>{user?.lastname}</p>
                        </div>
                        <div className={styles.cvItem}>
                            <h1>Специальность</h1>
                            <select name="" id="" className={styles.select}>
                                <option>Frontend</option>
                                <option>Backend</option>
                                <option>Design</option>
                                <option>Project Manager</option>
                            </select>
                        </div>
                        <div className={styles.cvItem}>
                            <h1>Телеграм</h1>
                            <CustomInput 
                                type="text"
                                placeholder="@username"
                                value={telegram}
                                onChange={(e) => setTelegram(e.currentTarget.value)}
                            />
                        </div>
                        <div className={styles.cvItem}>
                            <h1>Навыки</h1>
                            <textarea 
                                className={styles.textareaForm} 
                                placeholder="Расскажите о своих навыках"
                            >

                            </textarea>
                        </div>
                        <div className={styles.cvItem}>
                            <h1>Дополнительная информация</h1>
                            <textarea 
                                className={styles.textareaForm} 
                                placeholder="Расскажите о том, что считаете важным"
                            >

                            </textarea>
                        </div>
                        <div className={styles.cvItem}>
                            <h1>Ссылки на соцсети</h1>
                            <CustomInput 
                                type="text"
                                placeholder="Вставьте ссылку"
                                value={newLink}
                                onChange={(e) => setNewLink(e.currentTarget.value)}
                            />
                            <CustomButton color="dark" onClick={() => addNewLink(newLink)}>
                                Добавить
                            </CustomButton>
                            <div className={styles.linkContainer}>
                                {links.map((link) => {
                                    return (
                                        <div className={styles.link}>
                                            <a href={link.link} target="_blank">{link.name}</a>
                                            <p onClick={() => removeLink(link.name)}>
                                                ❌
                                            </p>
                                        </div>
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