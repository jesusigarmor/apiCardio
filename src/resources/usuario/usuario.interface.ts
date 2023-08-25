import { Document } from "mongoose";

export default interface Usuario extends Document {
    correoElectronico: string,
    contraseña: string
}