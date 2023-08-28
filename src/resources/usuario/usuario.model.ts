import { Schema, model } from "mongoose";
import Usuario from "./usuario.interface";

const UsuarioSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        apellido: {
            type: String,
            required: true
        },
        cedulaProfesional: {
            type: String,
            required: true
        },
        correoElectronico: {
            type: String,
            required: true
        },
        telefono: {
            type: String,
            required: true
        },
        contrasena: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default model<Usuario>('Usuario', UsuarioSchema);
