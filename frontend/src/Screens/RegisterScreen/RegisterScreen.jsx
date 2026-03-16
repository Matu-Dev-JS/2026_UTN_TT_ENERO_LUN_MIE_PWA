import React from 'react'
import { Link } from 'react-router'

const RegisterScreen = () => {
     const REGISTER_FORM_FIELDS = {
        EMAIL: 'email',
        PASSWORD: 'password'
    }

    /* 
    Implementar el useForm para este formulario de registro
    */

  return (
    <div>
        <h1>
            Registrarse
        </h1>
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name={REGISTER_FORM_FIELDS.NAME} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email"  name={REGISTER_FORM_FIELDS.EMAIL} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name={REGISTER_FORM_FIELDS.PASSWORD} />
            </div>
            <button type="submit">Registrarse</button>
        </form>
        <span>Ya tienes una cuenta? <Link to="/login">Iniciar sesion</Link></span>
    </div>
  )
}

export default RegisterScreen