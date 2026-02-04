import ENVIRONMENT from "./config/environment.config.js"
import { checkDB } from "./config/mysql.config.js"
import userRepository from "./repositories/users.repository.js"



checkDB()

/* userRepository.create(
    'pepe',
    'pepe_123',
    'pepe_2@gmail.com',
    ''
) */