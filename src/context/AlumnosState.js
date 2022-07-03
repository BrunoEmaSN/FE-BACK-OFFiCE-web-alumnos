import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllAlumnos, searchQuantityByCourse, searchQuantityDown, searchQuantityInscripted } from "../services/alumnosServices";
import { AlumnosContext } from "./BuildContext";

export const AlumnosState = ({children}) => {
    const [alumnos, setAlumnos] = useState({
        allAlumnos: [],
        quantityInscripted: [],
        quantityByCourse: [],
        quantityDown: [],
    });

    const navigate = useNavigate();

    const handleSelectAlumno = (alumnoId) => {
        navigate(`/alumnos/id=${ alumnoId }`);
    }
    
    useEffect(() => {
        const data = async () => {
            return Promise.all([
                await getAllAlumnos(),
                await searchQuantityInscripted(),
                await searchQuantityByCourse(),
                await searchQuantityDown(),
            ]);
        };

        setAlumnos({
            allAlumnos: data[0],
            quantityInscripted: data[1],
            quantityByCourse: data[2],
            quantityDown: data[3],
        });
    }, []);

    return (
        <AlumnosContext.Provider
            value={{
                alumnos,
                handleSelectAlumno
            }}
        >
            {children}
        </AlumnosContext.Provider>
    )
}
