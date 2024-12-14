export interface ILink {
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
    socials: ILink[];
}

export interface IProjectCard {
    userId: number;
    id: number;
    name: string;
    course: string;
    description: string;
    contacts: string[];
    needs: string[];
}

export interface IOptions {
    text: string;
    value: string;
}