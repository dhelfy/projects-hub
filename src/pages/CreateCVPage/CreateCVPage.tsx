import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, selectUsername } from "../../state/selectors/authSelector";
import { fetchUser } from "../../state/slices/userSlice";
import { CustomInput } from "../../shared/ui/CustomInput/CustomInput";
import { CustomButton } from "../../shared/ui/CustomButton/CustomButton";
import { ILink } from "../../types/types";
import styles from "./CreateCVPage.module.css"
import { useNavigate } from "react-router-dom";
import { addCard } from "../../state/slices/cardSlice";
import { selectAllCards } from "../../state/selectors/cardSelector";

export const CreateCVPage: FC = () => {
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch()
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

    const navigate = useNavigate()
    let [aboutInfo, setAboutInfo] = useState('')
    let [selectedSpeciality, setSelectedSpeciality] = useState('Frontend Developer')
    let [additionalInfo, setAdditionalInfo] = useState('')
    let [skills, setSkills] = useState('')
    let [phoneNumber, setPhoneNumber] = useState('')
    let [experience, setExperience] = useState('')
    let [tags, setTags] = useState('')

    useEffect(() => {
        dispatch(fetchUser({ username: username }))
    }, [dispatch, username])

    return (
        <>
            {
                isAuth
                    ?
                    <div className={styles.cvForm}>
                        <div className={styles.cvItem}>
                            <h1>Имя</h1>
                            <p>{user?.fullName.split(' ')[0]}</p>
                        </div>
                        <div className={styles.cvItem}>
                            <h1>Фамилия</h1>
                            <p>{user?.fullName.split(' ')[1]}</p>
                        </div>
                        <div className={styles.cvItem}>
                            <h1>Специальность</h1>
                            <select 
                                name="" 
                                id="" 
                                className={styles.select}
                                value={selectedSpeciality}
                                onChange={(e) => setSelectedSpeciality(e.target.value)}
                            >
                                <option>Frontend Developer</option>
                                <option>Backend Developer</option>
                                <option>Designer</option>
                                <option>Product Manager</option>
                            </select>
                        </div>
                        <div className={styles.cvItem}>
                            <h1>Почта</h1>
                            <p>{user?.contact}</p>
                        </div>
                        <div className={styles.cvItem}>
                            <h1>Навыки</h1>
                            <textarea
                                className={styles.textareaForm}
                                placeholder="Расскажите о своих навыках"
                                value={skills}
                                onChange={(e) => setSkills(e.currentTarget.value)}
                            >

                            </textarea>
                        </div>
                        <div className={styles.cvItem}>
                            <h1>Дополнительная информация</h1>
                            <textarea
                                className={styles.textareaForm}
                                placeholder="Расскажите о том, что считаете важным"
                                value={additionalInfo}
                                onChange={(e) => setAdditionalInfo(e.currentTarget.value)}
                            >

                            </textarea>
                        </div>
                        <div className={styles.cvItem}>
                            <h1>О себе</h1>
                            <textarea
                                className={styles.textareaForm}
                                placeholder="Расскажите о себе"
                                value={aboutInfo}
                                onChange={(e) => setAboutInfo(e.currentTarget.value)}
                            />
                        </div>

                        <div className={styles.cvItem}>
                            <h1>Номер телефона</h1>
                            <CustomInput
                                type="text"
                                placeholder="Введите номер телефона"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.currentTarget.value)}
                            />
                        </div>

                        <div className={styles.cvItem}>
                            <h1>Опыт</h1>
                            <CustomInput
                                type="number"
                                min="0" 
                                max="45"
                                placeholder="В годах"
                                value={experience}
                                onChange={(e) => setExperience(e.currentTarget.value)}
                            />
                        </div>

                        <div className={styles.cvItem}>
                            <h1>Теги</h1>
                            <CustomInput
                                type="text"
                                placeholder="Введите теги"
                                value={tags}
                                onChange={(e) => setTags(e.currentTarget.value)}
                            />
                        </div>

                        <CustomButton color="dark" onClick={() => {
                            if (user && skills && aboutInfo && phoneNumber && experience && tags) {
                                dispatch(addCard({
                                    fullName: user.fullName,
                                    profession: selectedSpeciality,
                                    tag: tags,
                                    information: aboutInfo,
                                    phoneNumber: phoneNumber,
                                    email: user.contact,
                                    course: user.course,
                                    login: user.login,
                                    password: user.password,
                                    skills: skills,
                                    additionalInfo: additionalInfo,
                                    contactInfo: user.contact,
                                    experienceYears: Number(experience)
                                  }))
                                
                                navigate('/profile')
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