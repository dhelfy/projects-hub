import { FC } from "react";
import { useParams } from "react-router-dom"


export const CVPage: FC = () => {
    type CVPageParams = {
        id: string;
    }

    let params = useParams<CVPageParams>()

    return (
        <h1>{params.id}</h1>
    )
}