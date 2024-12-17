import { IUser } from "../src/types/types";

export let users: IUser[] = [
    {
        login: 'petrov.a',
        password: 'front_2024',
        name: "Андрей",
        lastname: "Петров",
        speciality: "Frontend",
        course: "2-ой курс",
        telegram: "@andrew21",
        id: 1,
        cv: [1],
        projects: [1],
        invitations: [
            {
                from: 'Мария Рыбнова',
                projectId: 3,
                additionalInfo: ''
            }
        ],
        projectRequests: []
    },
    {
        login: 'lobanov.m',
        password: 'frontend_42',
        name: "Максим",
        lastname: "Лобанов",
        speciality: "Frontend",
        course: "2-ой курс",
        telegram: "@maxsosxd",
        id: 2,
        cv: [2],
        projects: [2],
        invitations: [],
        projectRequests: []
    },
    {
        login: 'rybnova.m',
        password: 'design_77',
        name: "Мария",
        lastname: "Рыбнова",
        speciality: "Design",
        course: "3-ий курс",
        telegram: "@whoami77",
        id: 3,
        cv: [3],
        projects: [3],
        invitations: [],
        projectRequests: []
    },
    {
        login: 'kotov.s',
        password: 'back_end33',
        name: "Александр",
        lastname: "Котов",
        speciality: "Backend",
        course: "3-ий курс",
        telegram: "@kotovfront",
        id: 4,
        cv: [4],
        projects: [4],
        invitations: [],
        projectRequests: []
    },
    {
        login: 'shushaeva.k',
        password: 'design22',
        name: "Ксения",
        lastname: "Шушаева",
        speciality: "Design",
        course: "2-ой курс",
        telegram: "@shpakhello",
        id: 5,
        cv: [5],
        projects: [5],
        invitations: [],
        projectRequests: []
    },
    {
        login: 'ivanchenko.i',
        password: 'backend_99',
        name: "Иван",
        lastname: "Иванченко",
        speciality: "Backend",
        course: "3-ий курс",
        telegram: "@ivanchenkoitsme",
        id: 6,
        cv: [6],
        projects: [6],
        invitations: [],
        projectRequests: []
    },
];
