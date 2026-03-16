import React, { useState } from 'react'
import { Link } from 'react-router'
import useForm from '../../hooks/useForm'
import { login } from '../../services/authService'
import useRequest from '../../hooks/useRequest'

const LoginScreen = () => {

    const {
        sendRequest, 
        error, 
        response, 
        loading
    } = useRequest()
    const LOGIN_FORM_FIELDS = {
        EMAIL: 'email',
        PASSWORD: 'password'
    }

    const initialFormState = {
        [LOGIN_FORM_FIELDS.EMAIL]: '',
        [LOGIN_FORM_FIELDS.PASSWORD]: ''
    }

    function onLogin (formState){
        sendRequest({
            requestCb: async () => {
                return await login({
                    email: formState[LOGIN_FORM_FIELDS.EMAIL],
                    password: formState[LOGIN_FORM_FIELDS.PASSWORD]
                })
            }
        })
    }

    const {
        handleChangeInput, 
        onSubmit, 
        formState
    } = useForm({
        initialFormState, 
        submitFn: onLogin
    })

    console.log(
        {
            response,
            error,
            loading
        }
    )

   


    return (
        <div>
            <h1>
                Iniciar sesion
            </h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email"  
                        name={LOGIN_FORM_FIELDS.EMAIL} 
                        onChange={handleChangeInput}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name={LOGIN_FORM_FIELDS.PASSWORD} 
                        onChange={handleChangeInput}
                    />
                </div>
                <button type="submit">Iniciar sesion</button>
            </form>
            <span>No tienes una cuenta? <Link to="/register">Registrarse</Link></span>
        </div>
    )
}

export default LoginScreen