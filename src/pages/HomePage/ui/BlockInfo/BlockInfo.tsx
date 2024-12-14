import styles from "./BlockInfo.module.css"
import { CustomButton } from "../../../../shared/ui/CustomButton/CustomButton"
import { FC } from "react"

interface BlockInfoProps {
    onScrollToVacancies: () => void
}

export const BlockInfo: FC<BlockInfoProps> = ({onScrollToVacancies}) => {
    return (
        <div className={styles.blockInfo}>
            <div className={styles.mainInfo}>
                <div className={styles.mainText}>
                    <h1 className={styles.pageHeading}>
                        Легкий способ<br />
                        найти людей <br />
                        в свою команду
                    </h1>
                    <p>
                        Находите участников для своего проекта <br />
                        в рамках нашего колледжа
                    </p>
                </div>
                <CustomButton
                    onClick={onScrollToVacancies}
                    color="dark"
                >
                    Найти участников
                </CustomButton>
            </div>
            <img src="/logo.png" width="400px" height="400px" />
        </div>
    )
}