import mysql from 'mysql2/promise'
import ENVIRONMENT from './environment.config.js'

//La pool es quien tendra las credenciales y configuraciones de acceso y conexion
const pool  = mysql.createPool(
    {
        host: ENVIRONMENT.MYSQL.DB_HOST,
        user: ENVIRONMENT.MYSQL.DB_USER, 
        password: ENVIRONMENT.MYSQL.DB_PASSWORD,
        database: ENVIRONMENT.MYSQL.DB_NAME,
        port: 3306
    }
)

export async function checkDB (){
    //Si llega a fallar el .getConnection se lanzara un error, el mismo sera capturado por catch y lo podemos manajar ahi
    try{
        const connection = await pool.getConnection()
        console.log('Conexion a la DB exitosa')
    }
    catch(error){
        console.error('Error al conectarse a la DB')
        console.error('Detalles del error', error)
    }
}

export default pool