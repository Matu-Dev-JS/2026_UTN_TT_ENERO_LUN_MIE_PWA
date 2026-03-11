import express from 'express'
import authController from '../controllers/auth.controller.js'
const authRouter = express.Router()

authRouter.post(
    '/register', 
    authController.register
)

authRouter.post(
    '/login', 
    authController.login
)

authRouter.get(
    '/verify-email',
    (request, response)=>{
        const {email} = request.query
        if(!email){
            response.status(404).send(`<h1>Pagina no encontrada</h1>`)
        }
    
        console.log('El usuario intento verificar el email ' + email)
        response.status(200).send(`<h1>Mail verificado exitosamente</h1>`)
    }
)

export default authRouter