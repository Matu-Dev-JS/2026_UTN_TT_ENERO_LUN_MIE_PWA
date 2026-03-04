import express from 'express'
import userRepository from '../repository/user.repository.js'

const healthRouter = express.Router()

healthRouter.get(
    '/',
    (request, response) => {
        response.status(200).json(
            {
                message: "La API funciona correctamente",
                status: 200,
                ok: true
            }
        )
    }
)

healthRouter.get(
    '/database',
    async (request, response) => {
        try{
            await userRepository.getUser()
            return response.status(200).json(
                {
                    message: "La DB funciona correctamente",
                    status: 200,
                    ok: true
                }
            )
        }
        catch(error){
            console.error("ERROR EN LA DB:", error)
            return response.status(500).json(
                {
                    message: 'La DB esta fallando, contactarse con el administrador',
                    status: 500,
                    ok: false
                }
            )
        }
    }
)

export default healthRouter