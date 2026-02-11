import ENVIRONMENT from "./config/environment.config.js"
import connectMongoDB from "./config/mongoDB.config.js"
import User from "./models/user.model.js"
import Workspace from "./models/workspace.model.js"



connectMongoDB()

async function crearUsuario (username, email, password){
    await User.create({
        name: username,
        email: email,
        password: password
    })
}

//crearUsuario('Test', 'test@gmail.com', 'Test_123')

async function createWorkspace(title, description, url_image) {
  await Workspace.create({ title, description, url_image });
}
/* 
createWorkspace(
  "Trabajo",
  "Grupo espacio de trabajo",
  "https://example.com/image1.jpg",
);

createWorkspace("Salida"); */