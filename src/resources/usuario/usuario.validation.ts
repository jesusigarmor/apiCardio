import Joi from "joi";

const create = Joi.object({
    correoElectronico: Joi.string().required(),
    contrasena: Joi.string().required(),
    telefono: Joi.string().required(),
    cedulaProfesional: Joi.string().required(),
    nombre: Joi.string().required(),
    apellido: Joi.string().required()
});

const update = Joi.object({
    correoElectronico: Joi.string().required(),
    contrasena: Joi.string().required()
});

export default {
    create,
    update
};