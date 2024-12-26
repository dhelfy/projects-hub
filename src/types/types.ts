export interface ILink {
    link: string;
    name: string;
}

export interface IInvitation {
    from: string;
    projectId: number;
    additionalInfo: string;
}

export interface IProjectRequest {
    from: string;
    cvId: number;
    additionalInfo: string;
    projectId: number;
}

export interface IStudentCard {
    id: number;
    fullName: string;
    profession: string;
    tag: string;
    additionalInfo: string | null;
    information: string;
    phoneNumber: string;
    email: string;
    course: number;
    login: string;
    password: string;
    skills: string | null;
    contactInfo: string;
    experienceYears: number;
    userId: number;
}

export interface IUser {
    login: string;
    password: string;
    name: string;
    lastname: string;
    speciality: string;
    course: string;
    telegram: string;
    id: number;
    cv: number[];
    projects: number[];
    invitations: IInvitation[];
    projectRequests: IProjectRequest[];
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