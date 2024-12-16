import { Outlet } from "react-router-dom"
import { Header } from "./ui/Header/Header"
import { FC, useState } from "react"
import styles from "./Layout.module.css"
import { Modal } from "../../shared/ui/Modal/Modal"
import { selectModalByName } from "../../state/selectors/modalSelector"
import { setVisible } from "../../state/slices/modalSlice"
import { useDispatch, useSelector } from "react-redux"
import { CustomInput } from "../../shared/ui/CustomInput/CustomInput"
import { login } from "../../state/slices/authSlice"


export const Layout: FC = () => {
    const modal = useSelector(selectModalByName('authModal'))
    const dispatch = useDispatch()
    let [loginState, setLoginState] = useState('petrov.a')
    let [passwordState, setPasswordState] = useState('')

    return (
        <>
            <Header />

            <Modal
                buttonText="Войти"
                header="Авторизация"
                visible={modal?.visible ?? false}
                setVisible={() => dispatch(setVisible({ name: 'authModal' }))}
                onClickAction={() => {
                    dispatch(login({login: loginState}))
                    dispatch(setVisible({ name: 'authModal' }))
                }}
            >
                <label htmlFor="login">Логин</label>
                <CustomInput type="text" placeholder="Логин" onChange={(e) => setLoginState(e.currentTarget.value)} value={loginState}/>
                <label htmlFor="password">Пароль</label>
                <CustomInput type="password" placeholder="Пароль" onChange={(e) => setPasswordState(e.currentTarget.value)} value={passwordState}/>
            </Modal>

            <main className={styles.mainSection}>
                <Outlet />
            </main>
        </>
    )
}