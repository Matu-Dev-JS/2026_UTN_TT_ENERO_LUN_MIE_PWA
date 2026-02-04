/* 
En los archivos de repository tratamos de tener la interaccion con nuesta DB
Basicamente es una capa de abstraccion
De esta manera nuestra app se divide de la interaccion con la DB y en un futuro sera mas facil cambiarla (Sin modificar nuestra app)
Un repository maneja idealmente una entidad y sus sub-entidades
Por ejemplo:
    Usuarios
        roles_usuario
    Productos
        categoria_producto
        moneda_producto
    Carrito
*/

import pool from "../config/mysql.config.js"

class UserRepository {
    async create(username, password, email, url_imagen){
        const result = await pool.query(
            `INSERT INTO users (username, email, password, url_imagen) VALUES (?, ?, ?, ?)`,
            [
                username,
                email,
                password,
                url_imagen
            ]
        )
        console.log(result)
    }

    update(){

    }

    getByEmail(){

    }

    getById(){

    }
}

const userRepository = new UserRepository()

export default userRepository