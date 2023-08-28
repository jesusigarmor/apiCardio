import UsuarioModel from "./usuario.model";
import Usuario from "./usuario.interface";

class UsuarioService {
    private usuario = UsuarioModel;

    /**
     * Crea a un nuevo usuario
     */
    public async create(
        nombre: string,
        apellido: string,
        cedulaProfesional: string,
        correoElectronico: string,
        telefono: string,
        contrasena: string
    ): Promise<Usuario> {
        try {
            const nuevoUsuario = await this.usuario.create({
                nombre,
                apellido,
                cedulaProfesional,
                telefono,
                correoElectronico,
                contrasena
            });

            return nuevoUsuario;
        } catch (error) {
            throw new Error('No se puede crear usuario');
        };
    }
}

export default UsuarioService;