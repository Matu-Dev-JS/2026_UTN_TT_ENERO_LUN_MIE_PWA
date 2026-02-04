import dotenv from 'dotenv'

//dotenv.config() permite cargar las variables de entorno del archivo .env y guardarlas en la variable global process.env
dotenv.config()


const ENVIRONMENT = {
    MYSQL: {
        DB_NAME: process.env.MYSQL_DB_NAME,
        DB_USER: process.env.MYSQL_DB_USER,
        DB_PASSWORD: process.env.MYSQL_DB_PASSWORD,
        DB_HOST: process.env.MYSQL_DB_HOST
    }
}

export default ENVIRONMENT