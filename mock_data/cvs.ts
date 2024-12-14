import { IStudentCard } from "../src/types/types";

export let cvs: IStudentCard[] = [
    {
        userId: 1,
        id: 1,
        heading: "Андрей Петров",
        speciality: "Frontend",
        course: "2-ой курс",
        telegram: "@andrew21",
        skills: "TypeScript, React, Node.js, Redux, HTML, CSS",
        additionalInfo: "Увлекаюсь созданием pet-проектов и активным участием в хакатонах.",
        socials: [
            { link: "https://github.com/andrew21", name: "Github" },
            { link: "https://linkedin.com/in/andrew21", name: "LinkedIn" }
        ]
    },
    {
        userId: 2,
        id: 2,
        heading: "Максим Лобанов",
        speciality: "Frontend",
        course: "2-ой курс",
        telegram: "@maxsosxd",
        skills: "JavaScript, Vue.js, SCSS, Git",
        additionalInfo: "Создаю UI-компоненты и увлекаюсь разработкой интерфейсов для мобильных приложений.",
        socials: [
            { link: "https://github.com/maxlobanov", name: "Github" },
            { link: "https://dribbble.com/maxlobanov", name: "Dribbble" }
        ]
    },
    {
        userId: 3,
        id: 3,
        heading: "Мария Рыбнова",
        speciality: "Design",
        course: "3-ий курс",
        telegram: "@whoami77",
        skills: "Figma, Photoshop, Illustrator, UI/UX",
        additionalInfo: "Опыт в создании дизайна для веб- и мобильных приложений. Люблю экспериментировать с цветами.",
        socials: [
            { link: "https://behance.net/maria_rybnova", name: "Behance" },
            { link: "https://dribbble.com/maria_rybnova", name: "Dribbble" }
        ]
    },
    {
        userId: 4,
        id: 4,
        heading: "Александр Котов",
        speciality: "Backend",
        course: "3-ий курс",
        telegram: "@kotovfront",
        skills: "Node.js, Express, MongoDB, Docker, TypeScript",
        additionalInfo: "Работаю над высоконагруженными системами, интересуюсь DevOps и оптимизацией приложений.",
        socials: [
            { link: "https://github.com/kotovfront", name: "Github" },
            { link: "https://linkedin.com/in/kotovfront", name: "LinkedIn" }
        ]
    },
    {
        userId: 5,
        id: 5,
        heading: "Ксения Шушаева",
        speciality: "Design",
        course: "2-ой курс",
        telegram: "@shpakhello",
        skills: "Figma, Adobe XD, CorelDRAW, Prototyping",
        additionalInfo: "Люблю создавать минималистичные дизайны и стремлюсь к гармонии в каждом проекте.",
        socials: [
            { link: "https://behance.net/ksenia_shushaeva", name: "Behance" },
            { link: "https://dribbble.com/ksenia_shushaeva", name: "Dribbble" }
        ]
    },
    {
        userId: 6,
        id: 6,
        heading: "Иван Иванченко",
        speciality: "Backend",
        course: "3-ий курс",
        telegram: "@ivanchenkoitsme",
        skills: "Python, Django, PostgreSQL, REST API, Kubernetes",
        additionalInfo: "Занимаюсь проектированием API и масштабируемых систем. Люблю разбираться в новых технологиях.",
        socials: [
            { link: "https://github.com/ivanchenkoitsme", name: "Github" },
            { link: "https://linkedin.com/in/ivanchenkoitsme", name: "LinkedIn" }
        ]
    },
];
