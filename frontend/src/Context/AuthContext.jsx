import { createContext, useState } from "react";

export const AuthContext = createContext()

const LOCALSTORAGE_TOKEN_KEY = 'auth_token_slack'

/* 
Va a manejar el estado de sesion del usuario
Es un contexto global
    Esto es asi porque queremos desde cualquier lugar de la aplicacion saber si el usuario esta o no logueado
*/
function AuthContextProvider ({children}){
    const [isLogged, setIsLogged] = useState(
        Boolean(
            localStorage.getItem(LOCALSTORAGE_TOKEN_KEY)
        )
    )

    function saveToken (auth_token){
        //Guardar el auth_token en el localstorage
        localStorage.setItem('auth_token_slack', auth_token)
        setIsLogged(true)
    }

    const providerValues = {
        isLogged,
        saveToken
    }
    console.log(isLogged)
    return (
        <AuthContext.Provider value={providerValues}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider