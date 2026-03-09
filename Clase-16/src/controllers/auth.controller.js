import ServerError from "../helpers/error.helper.js";
import userRepository from "../repository/user.repository.js";

class AuthController {
    async register(req, res) {

        try {

            const { email, name, password } = req.body;


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
            return res.status(201).json({
                ok: true,
                status: 201,
                message: "El usuario se ha creado exitosamente",
            });
        }
        catch (error) {
            //Errores esperables en el sistema
            if (error instanceof ServerError) {
                return res.status(error.status).json(
                    {
                        ok: false,
                        status: error.status,
                        message: error.message
                    }
                )
            }
            else {
                console.error('Error inesperado en el registro', error)
                return res.status(500).json(
                    {
                        ok: false,
                        status: 500,
                        message: "Internal server error"
                    }
                )
            }
        }
    }


    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await userRepository.getByEmail(email);
            if (!user) {
                throw new ServerError('Usuario no encontrado', 404);
            }
            if (user.password !== password) {
                throw new ServerError('Contraseña incorrecta', 401);
            }
            return res.status(200).json({
                message: "Login successful",
                status: 200,
                ok: true,
            });
        } 
        catch (error) {
            //Errores esperables en el sistema
            if (error instanceof ServerError) {
                return res.status(error.status).json(
                    {
                        ok: false,
                        status: error.status,
                        message: error.message
                    }
                )
            }
            else {
                console.error('Error inesperado en el login', error)
                return res.status(500).json(
                    {
                        ok: false,
                        status: 500,
                        message: "Internal server error"
                    }
                )
            }
        }
    }

}
const authController = new AuthController();
export default authController