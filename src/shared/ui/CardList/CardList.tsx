import { FC, useEffect } from "react"
import { Card } from "../Card/Card"
import styles from "./CardList.module.css"
import { useDispatch, useSelector } from "react-redux"
import { selectAllCards } from "../../../state/selectors/cardSelector"
import { fetchCards } from "../../../state/slices/cardSlice"
import { IStudentCard } from "../../../types/types"

export const CardList: FC = () => {
    // достаем все карточки
    const cards: IStudentCard[] = useSelector(selectAllCards)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCards())
    }, [dispatch])

    return (
        <div className={styles.cardList}>
            {cards.map((card) => {
                return (
                    <Card heading={card.fullName} navigateTo={`/cvs/${card.id}`} key={card.id}>
                        <p>{card.profession}</p>
                        <p>Курс: {card.course}</p>
                        <p>{card.contactInfo}</p>
                    </Card>
                )
            })}
        </div>
    )
}