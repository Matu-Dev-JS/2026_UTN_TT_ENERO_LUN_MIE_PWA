import React from 'react'
import { Link } from 'react-router'
import useForm from '../../hooks/useForm'

const RegisterScreen = () => {
    const REGISTER_FORM_FIELDS = {
        EMAIL: 'email',
        PASSWORD: 'password',
        NAME: 'name'
    }

    /* 
    Implementar el useForm para este formulario de registro
    */
    const initialFormState = {
        [REGISTER_FORM_FIELDS.NAME]: '',
        [REGISTER_FORM_FIELDS.EMAIL]: '',
        [REGISTER_FORM_FIELDS.PASSWORD]: ''
    }
    function onRegister(formState) {
        console.log('Registro enviado', formState)
    }
    const { handleChangeInput, onSubmit, formState } = useForm({ initialFormState, submitFn: onRegister })

    return (
        <div>
            <h1>
                Registrarse
            </h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name={REGISTER_FORM_FIELDS.NAME} onChange={handleChangeInput} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name={REGISTER_FORM_FIELDS.EMAIL} onChange={handleChangeInput} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name={REGISTER_FORM_FIELDS.PASSWORD} onChange={handleChangeInput} />
                </div>
                <button type="submit">Registrarse</button>
            </form>
            <span>Ya tienes una cuenta? <Link to="/login">Iniciar sesion</Link></span>
        </div>
    )
}

export default RegisterScreen