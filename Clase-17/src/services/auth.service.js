//Responsabilidad de manejar la logica de negocio
/* 
Registro:
    - Validar que no exista previamente el usuario
    - Enviar un mail de verificacion de correo electronico
*/

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
        const userCreated = await userRepository.create(name, email, password);
    }
}

const authService = new AuthService()

export default authService