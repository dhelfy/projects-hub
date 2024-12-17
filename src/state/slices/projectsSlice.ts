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
        fetchAllProjects: (state) => {
            state.isLoading = true
        },
        fetchAllProjectsSuccess: (state, action: PayloadAction<IProjectCard[]>) => {
            const existingIds = new Set(state.projects.map((project) => project.id));
            const newProjects = action.payload.filter((project) => !existingIds.has(project.id));
        
            state.projects = [...state.projects, ...newProjects];
            state.filteredProjects = [...state.projects];
            state.isLoading = false;
        },        
        fetchAllProjectsFailure: (state) => {
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
        addProject: (state, action: PayloadAction<IProjectCard>) => {
            state.projects.push(action.payload)
            state.filteredProjects.push(action.payload)
        },
        

    }
})

export default projectsSlice.reducer
export const {
    fetchAllProjects,
    fetchAllProjectsSuccess,
    fetchAllProjectsFailure,
    setFilter,
    addProject
} = projectsSlice.actions