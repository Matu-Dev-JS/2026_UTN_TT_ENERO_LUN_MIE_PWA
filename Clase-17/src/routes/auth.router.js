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
        const {verify_email_token} = request.query
        if(!verify_email_token){
            response.status(404).send(`<h1>Pagina no encontrada</h1>`)
        }
    
        console.log('El usuario intento verificar su email, token de validacion ' + verify_email_token)
        response.status(200).send(`<h1>Mail verificado exitosamente</h1>`)
    }
)

export default authRouter