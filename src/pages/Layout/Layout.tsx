import { Outlet } from "react-router-dom"
import { Header } from "./ui/Header/Header"
import { FC, useEffect, useState } from "react"
import styles from "./Layout.module.css"
import { Modal } from "../../shared/ui/Modal/Modal"
import { selectModalByName } from "../../state/selectors/modalSelector"
import { setVisible } from "../../state/slices/modalSlice"
import { useDispatch, useSelector } from "react-redux"
import { CustomInput } from "../../shared/ui/CustomInput/CustomInput"
import { login } from "../../state/slices/authSlice"
import { selectError, selectIsAuth } from "../../state/selectors/authSelector"


export const Layout: FC = () => {
    const isAuth = useSelector(selectIsAuth)
    const modal = useSelector(selectModalByName('authModal'))
    const error = useSelector(selectError)
    const dispatch = useDispatch()
    let [loginState, setLoginState] = useState('petrov.a')
    let [passwordState, setPasswordState] = useState('front_2024')

    const onClickAction = () => dispatch(login({ login: loginState, password: passwordState })) 

    useEffect(() => {
        if (isAuth && modal?.visible) {
            dispatch(setVisible({ name: "authModal" }));
        }
    }, [isAuth, modal?.visible, dispatch]);

    useEffect(() => {
        if(error != null) {
            alert(error)
        }
    }, [error]);

    return (
        <>
            <Header />

            <Modal
                buttonText="Войти"
                header="Авторизация"
                visible={modal?.visible ?? false}
                setVisible={() => dispatch(setVisible({ name: 'authModal' }))}
                onClickAction={() => onClickAction()}
            >
                <label htmlFor="login">Логин</label>
                <CustomInput 
                    type="text" 
                    placeholder="Логин" 
                    onChange={(e) => setLoginState(e.currentTarget.value)} 
                    value={loginState}
                />
                <label htmlFor="password">Пароль</label>
                <CustomInput 
                    type="password" 
                    placeholder="Пароль" 
                    onChange={(e) => setPasswordState(e.currentTarget.value)} 
                    value={passwordState}
                />
            </Modal>

            <main className={styles.mainSection}>
                <Outlet />
            </main>
        </>
    )
}