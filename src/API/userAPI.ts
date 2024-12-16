import { users } from "../../mock_data/users"
import { cvs } from "../../mock_data/cvs"

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

    users[userIndex].telegram = newTelegram

    return users[userIndex]
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

export const getUserProjects = () => {
    
}

export const getUserInvitations = () => {
    
}

export const getUserRequests = () => {
    
}