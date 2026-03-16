import React from 'react'
import { Link } from 'react-router'

const LoginScreen = () => {
    const LOGIN_FORM_FIELDS = {
        EMAIL: 'email',
        PASSWORD: 'password'
    }

  return (
    <div>
        <h1>
            Iniciar sesion
        </h1>
        <form>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email"  name={LOGIN_FORM_FIELDS.EMAIL} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name={LOGIN_FORM_FIELDS.PASSWORD} />
            </div>
            <button type="submit">Iniciar sesion</button>
        </form>
        <span>No tienes una cuenta? <Link to="/register">Registrarse</Link></span>
    </div>
  )
}

export default LoginScreen