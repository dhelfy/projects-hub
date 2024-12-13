import { users } from "../../mock_data/users.ts";
import { cards } from "../../mock_data/cards.ts";
import { IStudentCard } from "../types/types.ts";

export function getUserCards(userId: number) {
    const user = users.find((u) => u.id === userId);
    if (!user) return [];

    return user.cv.map((cardId) => cards.find((card) => card.id === cardId));
}

export function getCardById(cardId: number): IStudentCard | undefined {
    const card = cards.find((card) => card.id === cardId)

    return card
}

export function getAllCards(): IStudentCard[] {
    return cards
}