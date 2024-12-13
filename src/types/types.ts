export interface link {
    link: string;
    name: string;
}

export interface IStudentCard {
    id: number;
    userId: number,
    heading: string;
    speciality: string;
    course: string;
    telegram: string;
    skills: string;
    additionalInfo: string;
    socials: link[];
}

export interface IOptions {
    text: string;
    value: string;
}