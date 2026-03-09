import userRepository from "../repository/user.repository.js";

class AuthController {
    async register(req, res) {
        const { email, name, password } = req.body;
        const userByEmail = await userRepository.getByEmail(email);
        if (userByEmail) {
            return res.status(400).json({
                ok: false,
                status: 400,
                message: "El usuario ya existe",
            });
        }
        const userByUsername = await userRepository.getUser(name);
        if (userByUsername) {
            return res.status(400).json({
                ok: false,
                status: 400,
                message: "El usuario ya existe",
            });
        }
        const userCreated = await userRepository.create(name, email, password);
        return res.status(201).json({
            ok: true,
            status: 201,
            message: "El usuario se ha creado exitosamente",
        });
    }
        

}
const authController = new AuthController();
export default authController