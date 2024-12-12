import { Outlet } from "react-router-dom"
import { Header } from "./ui/Header/Header"
import { FC } from "react"
import styles from "./Layout.module.css"

export const Layout: FC = () => {
    return (
        <>
            <Header />
            <main className={styles.mainSection}>
                <Outlet />
            </main>
        </>
    )
}