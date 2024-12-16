import { Route, Routes } from "react-router-dom"
import { Layout } from "../pages/Layout/Layout"
import { FC } from "react"
import { HomePage } from "../pages/HomePage/HomePage"
import { CVPage } from "../pages/CVPage/CVPage"
import { VacanciesPage } from "../pages/VacanciesPage/VacanciesPage"
import { ProjectsPage } from "../pages/ProjectsPage/ProjectsPage"
import { ProjectPage } from "../pages/ProjectPage/ProjectPage"
import { ProfilePage } from "../pages/ProfilePage/ProfilePage"

export const App: FC = () => {
  return (
    <Routes>
      	<Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path="/cvs" element={<VacanciesPage />}/>
            <Route path="/projects" element={<ProjectsPage />}/>
            <Route path="/cvs/:id" element={<CVPage />}/>
            <Route path="/projects/:id" element={<ProjectPage />}/>
            <Route path="/profile" element={<ProfilePage />}/>
        </Route>
    </Routes>
  )
}
