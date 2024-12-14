import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProjectCard } from "../../types/types";

interface ProjectsState {
    projects: IProjectCard[];
    filteredProjects: IProjectCard[];
    isLoading: boolean;
    activeFilters: {
        [key: string]: string | undefined
    };
}

const initialState: ProjectsState = {
    projects: [],
    filteredProjects: [],
    isLoading: false,
    activeFilters: {}
};


const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        fetchProjects: (state) => {
            state.isLoading = true
        },
        fetchProjectsSuccess: (state, action: PayloadAction<IProjectCard[]>) => {
            state.projects = action.payload
            state.filteredProjects = action.payload
            state.isLoading = false
        },
        fetchProjectsFailure: (state) => {
            state.isLoading = false
        },
        setFilter: (state, action: PayloadAction<{ name: string; value: string }>) => {
            const { name, value } = action.payload;

            // Обновляем активный фильтр
            if (value === "") {
                delete state.activeFilters[name]; // Удаляем фильтр, если значение пустое
            } else if (value === "new" || value === "old") {
                console.log("Сортировка по новизне в заготовке");
            } else {
                state.activeFilters[name] = value;
            }

            // Применяем фильтры
            state.filteredProjects = state.projects.filter((project) => {
                return Object.entries(state.activeFilters).every(([filterName, filterValue]) => {
                    const projectValue = project[filterName as keyof IProjectCard];

                    if (Array.isArray(projectValue)) {
                        // Проверяем, входит ли значение фильтра в массив
                        return projectValue.includes(filterValue as string);
                    }

                    // Для строк и других типов данных
                    return projectValue === filterValue;
                });
            });
        },

    }
})

export default projectsSlice.reducer
export const {
    fetchProjects,
    fetchProjectsSuccess,
    fetchProjectsFailure,
    setFilter,
} = projectsSlice.actions