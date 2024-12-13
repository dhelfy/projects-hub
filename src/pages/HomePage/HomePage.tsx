import { FC } from "react"
import { BlockInfo } from "./ui/BlockInfo/BlockInfo"
import { BlockVacancies } from "./ui/BlockVanancies/BlockVacancies"


export const HomePage: FC = () => {

    const scrollToVacancies = () => {
        const element = document.getElementById('vacancies-header')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <BlockInfo onScrollToVacancies={scrollToVacancies} />

            <BlockVacancies />
        </>
    )
} 