import { Schema, model } from "mongoose";
import Usuario from "./usuario.interface";

const UsuarioSchema = new Schema(
    {
        correoElectronico: {
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
