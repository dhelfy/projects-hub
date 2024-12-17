import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, selectUsername } from "../../state/selectors/authSelector";
import { selectUser } from "../../state/selectors/userSelector";
import { fetchUser } from "../../state/slices/userSlice";
import { CustomInput } from "../../shared/ui/CustomInput/CustomInput";
import { CustomButton } from "../../shared/ui/CustomButton/CustomButton";
import styles from "./CreateProjectPage.module.css"
import { addProject } from "../../state/slices/projectsSlice";

export const CreateProjectPage: FC = () => {
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch()
    let username = useSelector(selectUsername)
    let user = useSelector(selectUser)
    let [contacts, setContacts] = useState<string[]>([])
    let [newContact, setNewContact] = useState('')
    let [projectName, setProjectName] = useState('')
    let [projectDesc, setProjectDesc] = useState('')
    let [selectedNeed, setSelectedNeed] = useState('Frontend');
    let [needs, setNeeds] = useState<string[]>([])

    useEffect(() => {
        dispatch(fetchUser({ username: username }))
    }, [dispatch, username])

    useEffect(() => {
        if (user) {
            setContacts([...contacts, user?.telegram])
        }
    }, [user])

    const removeContact = (contactToRemove: string) => {
        setContacts(contacts.filter((contact: string) => contact != contactToRemove));
    }

    const removeNeed = (needToRemove: string) => {
        setNeeds(needs.filter((need) => need != needToRemove))
    }

    return (
        <>
            {
                isAuth
                    ?
                    <div className={styles.projectForm}>
                        <div className={styles.cvItem}>
                            <h1>Название проекта</h1>
                            <CustomInput
                                type="text"
                                value={projectName}
                                onChange={(e) => setProjectName(e.currentTarget.value)}
                            />
                        </div>
                        <div className={styles.projectItem}>
                            <h1>Описание проекта</h1>
                            <textarea
                                placeholder="Расскажите о вашем проекте"
                                className={styles.textareaForm}
                                value={projectDesc}
                                onChange={(e) => setProjectDesc(e.currentTarget.value)}
                            />
                        </div>
                        <div className={styles.projectItem}>
                            <h1>Кого будем искать</h1>
                            <select
                                className={styles.select}
                                value={selectedNeed}
                                onChange={(e) => setSelectedNeed(e.target.value)}
                            >
                                <option>Frontend</option>
                                <option>Backend</option>
                                <option>Design</option>
                                <option>Project Manager</option>
                            </select>
                            <CustomButton color="dark" onClick={() => setNeeds([...needs, selectedNeed])}>
                                Добавить
                            </CustomButton>
                            <div className={styles.contactContainer}>
                                {needs.map((need) => {
                                    return (
                                        <div className={styles.contact}>
                                            <p>{need}</p>
                                            <p onClick={() => removeNeed(need)}>
                                                ❌
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={styles.projectItem}>
                            <h1>Контакты участников</h1>
                            <CustomInput
                                type="text"
                                placeholder="@username"
                                value={newContact}
                                onChange={(e) => setNewContact(e.currentTarget.value)}
                            />
                            <CustomButton color="dark" onClick={() => {
                                setContacts([...contacts, newContact])
                                setNewContact('')
                            }}>
                                Добавить
                            </CustomButton>
                            <div className={styles.contactContainer}>
                                {contacts.map((contact) => {
                                    return (
                                        <div className={styles.contact}>
                                            <p>{contact}</p>
                                            <p onClick={() => removeContact(contact)}>
                                                ❌
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <CustomButton color="dark" onClick={() => {
                            if (user) {

                                dispatch(addProject(
                                    {
                                        userId: user?.id,
                                        id: Date.now(),
                                        name: projectName,
                                        course: user?.course,
                                        description: projectDesc,
                                        contacts: contacts,
                                        needs: needs,
                                        updateDate: new Date().toISOString().split('T')[0],
                                    }
                                ))
                            }
                        }}>
                            Создать
                        </CustomButton>
                    </div>
                    :
                    <h1>Anauthorized</h1>
            }
        </>
    )
}