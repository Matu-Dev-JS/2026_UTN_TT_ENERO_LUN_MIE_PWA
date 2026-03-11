//Responsabilidad de manejar la logica de negocio
/* 
Registro:
    - Validar que no exista previamente el usuario
    - Enviar un mail de verificacion de correo electronico
*/

import ENVIRONMENT from "../config/environment.config.js";
import mailerTransporter from "../config/mailer.config.js";
import ServerError from "../helpers/error.helper.js";
import userRepository from "../repository/user.repository.js";

class AuthService {
    async register({ name, email, password }) {
        if (!name || !email || !password) {
            throw new ServerError("Email, nombre de usuario y contraseña son obligatorios", 400);
        }

        const userByEmail = await userRepository.getByEmail(email);
        if (userByEmail) {
            throw new ServerError('Email ya en uso!', 400)
        }
        const userByUsername = await userRepository.getByUsername(name);
        if (userByUsername) {
            throw new ServerError('Nombre de usuario ya en uso!', 400)
        }

        await mailerTransporter.sendMail(
            {
                from: ENVIRONMENT.MAIL_USER,
                to: email, 
                subject: `Bienvenido ${name} verifica tu correo electronico`,
                html:`
                    <h1>Bienvenido ${name}</h1>
                    <p>Te has registrado correctamente, necesitamos verificar tu correo electronico</p>
                    <a href="${ENVIRONMENT.URL_BACKEND + `/api/auth/verify-email?email=${email}`}">Click aqui para verificar</a>
                    <span>Si no reconoces este registro desestima este mail.</span>
                `
            }
        )

        const userCreated = await userRepository.create(name, email, password);
    }
}

const authService = new AuthService()

export default authService