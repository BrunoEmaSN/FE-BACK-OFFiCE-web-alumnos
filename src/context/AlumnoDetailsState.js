import React, { useEffect, useRef, useState } from "react";
import { useParams } from 'react-router-dom';
import { searchAverageCalificationByAlumno, searchtStatusMateriaByAlumno } from "../services/alumnosServices";
import { ALumnoDetailsContext } from "./BuildContext";

export const AlumnoDetailsState = ({children}) => {
    const { id } = useParams();
    const alumnoId = useRef(id);
    const [alumno, setAlumno] = useState({
        averageCalificationByAlumno: [],
        statusMateriaByAlumno: [],
    });

    useEffect(() => {
        const data = async () => {
            return Promise.all([
                await searchAverageCalificationByAlumno(alumnoId.current),
                await searchtStatusMateriaByAlumno(alumnoId.current),
            ]);
        };

        setAlumno({
            averageCalificationByAlumno: data[0],
            statusMateriaByAlumno: data[1],
        });
    }, []);
    
    return (
        <ALumnoDetailsContext.Provider
            value={{
                alumno
            }}
        >
            {children}
        </ALumnoDetailsContext.Provider>
    )
}