import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import { AlumnosState } from '../context/AlumnosState';
import { AlumnosPage } from '../pages/Alumnos/AlumnosPage';
import { AsistenciasPage } from '../pages/Asistencias/AsistenciasPage';
import { ClasesPage } from '../pages/Clases/ClasesPage';
import { DocentesPage } from '../pages/Docentes/DocentesPage';
import { HomePage } from '../pages/Home/HomePage';
import { LayoutPage } from '../pages/LayoutPage';
import { MateriasPage } from '../pages/Materias/MateriasPage';
import { MesasExamenesPage } from '../pages/MesasExamenes/MesasExamenesPage';

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <LayoutPage>    
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/alumnos" element={
                        <AlumnosState>
                            <AlumnosPage />
                        </AlumnosState>
                    }/>
                    
                    <Route path="/asistencias" element={<AsistenciasPage />} />
                    <Route path="/clases" element={<ClasesPage />} />
                    <Route path="/docentes" element={<DocentesPage />} />
                    <Route path="/materias" element={<MateriasPage />} />
                    <Route path="/mesasExamenes" element={<MesasExamenesPage />} />
                </Routes>
            </LayoutPage>
        </BrowserRouter>
    );
}
