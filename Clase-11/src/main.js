import ENVIRONMENT from "./config/environment.config.js"
import connectMongoDB from "./config/mongoDB.config.js"
import User from "./models/user.model.js"
import Workspace from "./models/workspace.model.js"
import WorkspaceMember from "./models/workspaceMember.model.js"



connectMongoDB()




