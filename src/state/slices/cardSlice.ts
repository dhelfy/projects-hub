import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStudentCard } from "../../types/types";

interface CardState {
    cards: IStudentCard[];
    filteredCards: IStudentCard[];
    isLoading: boolean;
    activeFilters: {
        [key: string]: string | undefined
    };
}

const initialState: CardState = {
    cards: [],
    filteredCards: [],
    isLoading: false,
    activeFilters: {}
};

interface INewCV {
    fullName: string,
    profession: string,
    tag: string,
    information: string,
    phoneNumber: string,
    email: string,
    course: number,
    login: string,
    password: string,
    skills: string,
    additionalInfo: string,
    contactInfo: string,
    experienceYears: number
}

const cardSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        fetchCards: (state) => {
            state.isLoading = true
        },
        fetchCardsSuccess: (state, action: PayloadAction<IStudentCard[]>) => {
            const existingIds = new Set(state.cards.map((cv) => cv.id))
            const newCards = action.payload.filter((cv) => !existingIds.has(cv.id))

            state.cards = [...state.cards, ...newCards]
            state.filteredCards = [...state.cards]
            state.isLoading = false
        },
        fetchCardsFailure: (state) => {
            state.isLoading = false
        },
        setFilter: (state, action: PayloadAction<{ name: string; value: string }>) => {
            const { name, value } = action.payload

            // Обновляем активный фильтр
            if (value === "") {
                delete state.activeFilters[name] // Удаляем фильтр, если значение пустое
            } else if (value === "new" || value === "old") {
                console.log('Сортировка по новизне в заготовке')
            } else {
                state.activeFilters[name] = value
            }

            // Применяем фильтры
            state.filteredCards = state.cards.filter((card) => {
                return Object.entries(state.activeFilters).every(([filterName, filterValue]) => {
                    return card[filterName as keyof IStudentCard] === filterValue
                });
            });
        },
        addCard: (state, action: PayloadAction<INewCV>) => {
            state.isLoading = true
        },
        addCardSuccess: (state) => {
            state.isLoading = false
        },
        addCardFailure: (state) => {
            state.isLoading = false
        }
    }
})

export default cardSlice.reducer
export const { 
    fetchCards, 
    fetchCardsSuccess, 
    fetchCardsFailure, 
    setFilter,
    addCard,
    addCardFailure,
    addCardSuccess
} = cardSlice.actions