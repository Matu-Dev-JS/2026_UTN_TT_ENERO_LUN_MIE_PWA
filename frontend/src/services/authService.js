export async function login ({email, password}){
    const response_http = await fetch(
        'http://localhost:8080/api/auth/login',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    email, 
                    password
                }
            )
        }
    )

    const response = await response_http.json()
    return response
}


async function register (){

}