import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/utils/interfaces/controller.interface";
import HttpException from "@/utils/exceptions/http.exception";
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/usuario/usuario.validation';
import UsuarioService from '@/resources/usuario/usuario.service';

class UsuarioController implements Controller {
    public path = '/usuario';
    public router = Router();
    private UsuarioService = new UsuarioService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.create),
            this.create
        )
    };

    private create = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const { correoElectronico, contrasena } = req.body;

            const usuario = await this.UsuarioService.create(correoElectronico,contrasena);

            res.status(201).json({usuario});
        } catch (error: any) {
            next(new HttpException(400, error.message));
        }
    }
}

export default UsuarioController;
