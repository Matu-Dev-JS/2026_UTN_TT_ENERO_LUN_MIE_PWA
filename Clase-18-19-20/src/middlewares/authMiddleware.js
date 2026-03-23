import jwt from 'jsonwebtoken'
import ENVIRONMENT from '../config/environment.config.js'

function authMiddleware(request, response, next) {
    //El token se envia en el header de authorization NORMALMENTE
    const auth_header = request.headers.authorization

    //Extraigo del header el token
    const auth_token = auth_header.split(' ')[1]

    //Valido el token
    const payload = jwt.verify(auth_token, ENVIRONMENT.JWT_SECRET_KEY)

    //IMPORTANTE!!!, guardo en la request la sesion del usuario
    request.user = payload
    next()
}

export default authMiddleware