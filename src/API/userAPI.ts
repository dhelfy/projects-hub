import { users } from "../../mock_data/users"
import { cvs } from "../../mock_data/cvs"
import { projects } from "../../mock_data/projects"

export const getUserByLogin = (login: string) => {
    const user = users.find((user) => {
        return user.login === login
    })

    if (user) {
        return user
    }
}

export const updateUserTelegram = (login: string, newTelegram: string) => {
    const userIndex = users.findIndex((user) => user.login === login)

    if (userIndex === -1) {
        throw new Error("User not found")
    }
    
    const user = {...users[userIndex]}

    user.telegram = newTelegram

    return user
};



export const getUserCvs = (login: string) => {
    const user = users.find((user) => user.login === login)

    if (user) {
        const userCvs = cvs.filter((cv) => cv.userId === user?.id)
        return userCvs
    } else {
        throw new Error("Can't find cvs")
    }
}

export const getUserProjects = (login: string) => {
    const user = users.find((user) => user.login === login)

    if (user) {
        const userProjects = projects.filter((projects) => projects.userId === user?.id)
        return userProjects
    } else {
        throw new Error("Can't find projects")
    }
}

export const getUserInvitations = (login: string) => {
    const user = users.find((user) => user.login === login)

    if (user) {
        const userInvitations = user.invitations
        return userInvitations
    } else {
        throw new Error("Can't find invitations")
    } 
}

export const getUserRequests = (login: string) => {
    const user = users.find((user) => user.login === login)

    if (user) {
        const userRequests = user.projectRequests
        return userRequests
    } else {
        throw new Error("Can't find requests")
    } 
}