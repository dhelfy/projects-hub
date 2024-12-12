import { users } from "../data/users.ts";
import { cards } from "../data/cards.ts";

export function getUserCards(userId: number) {
    const user = users.find((u) => u.id === userId);
    if (!user) return [];

    return user.cv.map((cardId) => cards.find((card) => card.id === cardId));
}
