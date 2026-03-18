import React, { useEffect } from 'react'
import { Link } from 'react-router'
import useForm from '../../hooks/useForm'

const ResetPasswordRequestScreen = () => {

  /* Hacer un formulario donde se solcite el email, este email sera usado para saber a quien debemos mandar el mail para restablecer la contraseña */
  const FORM_FIELDS = {
    EMAIL: 'email'
  }
  const initalFormState = {
    [FORM_FIELDS.EMAIL]: ''
  }

  function submitResetPasswordRequest() {
    console.log("Se envio una solicitud de restablecimiento de contraseña")
  }

  const {
    handleChangeInput,
    onSubmit,
    formState,
    resetForm
  } = useForm({
    initialFormState: initalFormState,
    submitFn: submitResetPasswordRequest
  })
  console.log(formState)



  return (
    <div>

      <h1>Restablecer contraseña</h1>
      <p>
        Se enviara un mail con instrucciones para que puedas restablecer tu contraseña
      </p>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name={FORM_FIELDS.EMAIL}
            id="email"
            onChange={handleChangeInput}
            value={formState[FORM_FIELDS.EMAIL]}
          />
        </div>
        <button type='submit'>Enviar solicitud</button>
      </form>
      <span>
        Recuerdas tu contraseña? <Link to={'/login'}>Inciar sesion</Link>
      </span>
      <br />
      <span>No tienes una cuenta? <Link to="/register">Registrarse</Link></span>
    </div>
  )
}

export default ResetPasswordRequestScreen