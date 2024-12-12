import { FC, ReactNode } from "react"
import styles from "./Card.module.css"
import { CustomButton } from "../CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

interface CardProps {
    children: ReactNode;
    heading: string;
    navigateTo: string;
}

export const Card: FC<CardProps> = ({heading, children, navigateTo}) => {
    let navigate = useNavigate();

    return (
        <div className={styles.card}>
            <h1>{heading}</h1>
            {children}
            <CustomButton 
                onClick={() => navigate(navigateTo)}
                color="dark"
            >
                Смотреть
            </CustomButton>
        </div>
    )
} 