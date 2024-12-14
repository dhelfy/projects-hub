import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { fetchCv } from "../../state/slices/cardPageSlice";
import { selectCard } from "../../state/selectors/cardPageSelector";
import { CustomButton } from "../../shared/ui/CustomButton/CustomButton";
import styles from "./CVPage.module.css"
import { selectIsAuth } from "../../state/selectors/authSelector";


export const CVPage: FC = () => {
    const dispatch = useDispatch()
    const card = useSelector(selectCard)
    const navigate = useNavigate()
    const isAuth = useSelector(selectIsAuth)

    type CVPageParams = {
        id: string;
    }

    let params = useParams<CVPageParams>()

    useEffect(() => {
        if (params.id) {
            dispatch(fetchCv(Number(params.id)));
        }
    }, [params.id]);

    return (
        <>
            <div className={styles.cvInfo}>
                <div>
                    <h1>{card?.heading}</h1>
                    <p>{card?.telegram}</p>
                </div>
                <div>
                    <h1>Специальность</h1>
                    <p>{card?.speciality}</p>
                </div>
                <div>
                    <h1>Навыки</h1>
                    <p>{card?.skills}</p>
                </div>
                <div>
                    <h1>Дополнительная информация</h1>
                    <p>{card?.additionalInfo}</p>
                </div>
                <div>
                    <h1>Ссылки на соцсети</h1>
                    <div className={styles.links}>
                        {card?.socials.map((link) => {
                            return <a href={link.link}>{link.name}</a>
                        })}
                    </div>
                </div>
            </div>

            <div className={styles.blockButtons}>
                {
                    isAuth ?
                        <>
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
                                Назад к резюме
                            </CustomButton>
                        </>
                        :
                        <CustomButton
                            color="dark"
                            onClick={() => navigate(-1)}
                        >
                            Назад к резюме
                        </CustomButton>
                }
            </div>
        </>
    )
}