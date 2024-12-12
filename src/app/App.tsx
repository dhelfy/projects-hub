import { Route, Routes } from "react-router-dom"
import { Layout } from "../pages/Layout/Layout"
import { FC } from "react"
import { HomePage } from "../pages/HomePage/HomePage"
import { CVPage } from "../pages/CVPage/CVPage"

export const App: FC = () => {
  return (
    <Routes>
      	<Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path="/cvs/:id" element={<CVPage />}/>
        </Route>
    </Routes>
  )
}
