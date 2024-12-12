import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal } from "../../shared/ui/Modal/Modal"
import { CustomInput } from "../../shared/ui/CustomInput/CustomInput"
import { login } from "../../state/slices/authSlice"
import { BlockInfo } from "./ui/BlockInfo/BlockInfo"
import { BlockVacancies } from "./ui/BlockVanancies/BlockVacancies"
import { selectModalByName } from "../../state/selectors/modalSelector"
import { setVisible } from "../../state/slices/modalSlice"

export const HomePage: FC = () => {
    const modal = useSelector(selectModalByName('authModal'))
    const dispatch = useDispatch()

    const scrollToVacancies = () => {
        const element = document.getElementById('vacancies-header')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <Modal
                buttonText="Войти"
                header="Авторизация"
                visible={modal?.visible ?? false}
                setVisible={() => dispatch(setVisible({ name: 'authModal' }))}
                onClickAction={() => {
                    dispatch(login())
                    dispatch(setVisible({ name: 'authModal' }))
                }}
            >
                <label htmlFor="login">Логин</label>
                <CustomInput type="text" placeholder="Логин" />
                <label htmlFor="password">Пароль</label>
                <CustomInput type="password" placeholder="Пароль" />
            </Modal>

            <BlockInfo onScrollToVacancies={scrollToVacancies} />

            <BlockVacancies />
        </>
    )
} 