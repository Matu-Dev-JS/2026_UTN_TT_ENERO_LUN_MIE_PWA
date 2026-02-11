import ENVIRONMENT from "./config/environment.config.js"
import connectMongoDB from "./config/mongoDB.config.js"
import User from "./models/user.model.js"
import Workspace from "./models/workspace.model.js"
import WorkspaceMember from "./models/workspaceMember.model.js"



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

async function createMember (id_user, id_workpace, role = 'user'){
    
    await WorkspaceMember.create({
        fk_id_user: id_user,
        fk_id_workspace: id_workpace,
        role: role
    })
}

//createMember('698ccf5288e8976b62166133', '698cd99696d860463f81e5fc', 'owner')