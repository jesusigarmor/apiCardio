import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import App from './app';
import UsuarioController from '@/resources/usuario/usuario.controller';

validateEnv();

const app = new App([new UsuarioController], Number(process.env.PORT));

app.listen();
