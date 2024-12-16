import { FC } from "react";
import styles from './Header.module.css'
import { NavLink, NavLinkRenderProps, useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../state/slices/authSlice";
import { selectIsAuth } from "../../../../state/selectors/authSelector";
import { setVisible } from "../../../../state/slices/modalSlice";
import { selectModalByName } from "../../../../state/selectors/modalSelector";
import { ModalAccepting } from "../../../../shared/ui/ModalAccepting/ModalAccepting";
import { clearUser } from "../../../../state/slices/userSlice";

export const Header: FC = () => {
    const active = ({ isActive }: NavLinkRenderProps) => isActive ? `${styles.activeLink} ${styles.link}` : styles.link
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)
    const modal = useSelector(selectModalByName('logoutModal'))

    const onLogout = () => {
        dispatch(setVisible({ name: 'logoutModal' }))
    }

    return (
        <div className={styles.header}>
            <ModalAccepting
                actionOneText="Остаться"
                actionTwoText="Выйти"
                header="Вы уверены?"
                visible={modal?.visible ?? false}
                setVisible={() => dispatch(setVisible({ name: 'logoutModal' }))}
                actionOne={() => {
                    dispatch(setVisible({ name: 'logoutModal' }))
                }}
                actionTwo={() => {
                    dispatch(setVisible({ name: 'logoutModal' }))
                    dispatch(logout())
                    dispatch(clearUser())
                }} 
            />

            <img
                src="/logo.png"
                width="50px"
                height="50px"
                onClick={() => navigate('/')}
            />

            <div className={styles.navbar}>
                {
                    isAuth ?
                        <>
                            <NavLink to="/projects" className={active}>Поиск проектов</NavLink>
                            <NavLink to="/cvs" className={active}>Поиск участников</NavLink>
                            <img src="/user.png" height="40px" width="40px" onClick={() => navigate('/profile')}/>
                            <button
                                className={styles.loginButton}
                                onClick={() => onLogout()}
                            >
                                Выйти
                            </button>
                        </>
                        :
                        <>
                            <NavLink to="/projects" className={active}>Поиск проектов</NavLink>
                            <NavLink to="/cvs" className={active}>Поиск участников</NavLink>
                            <button
                                className={styles.loginButton}
                                onClick={() => dispatch(setVisible({ name: 'authModal' }))}
                            >
                                Войти
                            </button>
                        </>
                }
            </div>
        </div>
    )
}