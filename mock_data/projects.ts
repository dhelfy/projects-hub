import { IProjectCard } from "../src/types/types"

export let projects: IProjectCard[] = [
    {
        userId: 1,
        id: 1,
        name: "ToDoList",
        course: "2-ой курс",
        description: "Проект представляет из себя систему для ведения списков дел. За подробностями пишите в телеграм.",
        contacts: [
            "@andrew21"
        ],
        needs: [
            "Backend",
            "Designer",
            "Project Manager"
        ],
        updateDate: '2024-12-15'
    },
    {
        userId: 2,
        id: 2,
        name: "Personal Portfolio",
        course: "2-ой курс",
        description: "Проект предназначен для создания онлайн-портфолио. Для сотрудничества пишите в телеграм.",
        contacts: [
            "@maxsosxd"
        ],
        needs: [
            "Designer",
            "Backend"
        ],
        updateDate: '2024-12-15'
    },
    {
        userId: 3,
        id: 3,
        name: "UI Kit Design",
        course: "3-ий курс",
        description: "Проект по созданию библиотеки UI компонентов. Свяжитесь в телеграм для обсуждения.",
        contacts: [
            "@whoami77"
        ],
        needs: [
            "Frontend",
            "Backend"
        ],
        updateDate: '2024-12-15'
    },
    {
        userId: 4,
        id: 4,
        name: "API Service",
        course: "3-ий курс",
        description: "Проект API сервиса для работы с данными. Пишите в телеграм для сотрудничества.",
        contacts: [
            "@kotovfront"
        ],
        needs: [
            "Frontend",
            "Designer"
        ],
        updateDate: '2024-12-15'
    },
    {
        userId: 5,
        id: 5,
        name: "Design System",
        course: "2-ой курс",
        description: "Проект по разработке дизайн-системы. Свяжитесь в телеграм для сотрудничества.",
        contacts: [
            "@shpakhello"
        ],
        needs: [
            "Frontend",
            "Backend"
        ],
        updateDate: '2024-12-15'
    },
    {
        userId: 6,
        id: 6,
        name: "Database Optimization",
        course: "3-ий курс",
        description: "Проект по оптимизации баз данных. За подробностями пишите в телеграм.",
        contacts: [
            "@ivanchenkoitsme"
        ],
        needs: [
            "Frontend",
            "Designer"
        ],
        updateDate: '2024-12-15'
    }
]
