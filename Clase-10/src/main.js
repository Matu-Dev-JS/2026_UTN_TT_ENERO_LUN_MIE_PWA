import ENVIRONMENT from "./config/environment.config.js"
import connectMongoDB from "./config/mongoDB.config.js"
import User from "./models/user.model.js"



connectMongoDB()

async function crearUsuario (username, email, password){
    await User.create({
        name: username,
        email: email,
        password: password
    })
}

crearUsuario('Test', 'test@gmail.com', 'Test_123')