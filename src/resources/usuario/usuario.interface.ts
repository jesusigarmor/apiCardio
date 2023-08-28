import { Document } from "mongoose";

export default interface Usuario extends Document {
    nombre: string,
    apellido: string,
    cedulaProfesional: string,
    telefono: string,
    correoElectronico: string,
    contraseña: string
}