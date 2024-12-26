import { Route, Routes } from "react-router-dom"
import { Layout } from "../pages/Layout/Layout"
import { FC } from "react"
import { HomePage } from "../pages/HomePage/HomePage"
import { CVPage } from "../pages/CVPage/CVPage"
import { VacanciesPage } from "../pages/VacanciesPage/VacanciesPage"
import { ProjectsPage } from "../pages/ProjectsPage/ProjectsPage"
import { ProjectPage } from "../pages/ProjectPage/ProjectPage"
import { ProfilePage } from "../pages/ProfilePage/ProfilePage"
import { CreateCVPage } from "../pages/CreateCVPage/CreateCVPage"
import { CreateProjectPage } from "../pages/CreateProjectPage/CreateProjectPage"

export const App: FC = () => {
  return (
    <Routes>
      	<Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path="/cvs" element={<VacanciesPage />}/>
            <Route path="/projects" element={<ProjectsPage />}/>
            <Route path="/cvs/:id" element={<CVPage />}/>
            <Route path="/projects/:name" element={<ProjectPage />}/>
            <Route path="/profile" element={<ProfilePage />}/>
            <Route path="/newCV" element={<CreateCVPage />}/>
            <Route path="/newProject" element={<CreateProjectPage />}/>
        </Route>
    </Routes>
  )
}
