import React, { useContext } from "react";
import { Box } from "@mui/system";
import moment from "moment";
import { TableGeneric } from "../../Components/Table/TableGeneric";
import { AlumnosContext } from "../../../context/BuildContext";

const createData = (
  fechaAgregado,
  nombre,
  apellido,
  tipoDocumento,
  documento,
  condicion,
) => {
  return {
    fechaAgregado,
    nombre,
    apellido,
    tipoDocumento,
    id: documento,
    condicion,
  };
};

export const Table = () => {
  const { alumnos } = useContext(AlumnosContext);

  const columns = [
    { id: "fechaAgregado", label: "Fecha Agregado" },
    { id: "nombre", label: "Nombre" },
    { id: "apellido", label: "Apellido" },
    { id: "tipoDocumento", label: "Tipo Documento" },
    { id: "id", label: "Documento" },
    { id: "condicion", label: "Condicion" },
    { id: "faltantes", label: "Faltantes" },
  ];

  const rows = alumnos.map((a) =>
    createData(
      moment(a.fecha_agregado).format("yyyy-MM-DD"),
      a.nombre,
      a.apellido,
      a.tipo_documento,
      a.documento,
      a.condicion,
      a.partida_nacimiento,
      a.fotocopia_dni,
      a.fotocopia_cuil,
      a.foto4x4,
      a.contrato
    )
  );

  return (
    <Box>
      <TableGeneric columns={columns} rows={rows} />
    </Box>
  );
};
