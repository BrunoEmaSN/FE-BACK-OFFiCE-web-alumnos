import { axiosWithoutToken } from "./baseServices";

const baseUrl = 'localhost:5000';

export const getAllAlumnos = async () => {
    const url = `${baseUrl}/alumnos`;
    const allAlumnos = await axiosWithoutToken(url);
    return allAlumnos;
}

export const searchQuantityInscripted = async () => {
    const url = `${baseUrl}/alumnos/alumnosInscripted`;
    const quantityInscripted = await axiosWithoutToken(url);
    return quantityInscripted;
}

export const searchQuantityByCourse = async () => {
    const url = `${baseUrl}/alumnos/alumnosByCourse`;
    const quantityByCourse = await axiosWithoutToken(url);
    return quantityByCourse;
}

export const searchQuantityDown = async () => {
    const url = `${baseUrl}/alumnos/alumnosWithdrawn`;
    const quantityDown = await axiosWithoutToken(url);
    return quantityDown;
}

export const searchAverageCalificationByAlumno = async () => {
    const url = `${baseUrl}/alumnos/calificacionesAverageByAlumno`;
    const averageCalificationByAlumno = await axiosWithoutToken(url);
    return averageCalificationByAlumno;
}

export const searchtStatusMateriaByAlumno = async () => {
    const url = `${baseUrl}/alumnos/materiasStatusByAlumno`;
    const statusMateriaByAlumno = await axiosWithoutToken(url);
    return statusMateriaByAlumno;
}
