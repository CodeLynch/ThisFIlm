
const API_URL = "http://localhost:8000/api";


export async function RegisterUser(
    email:string,
    displayName:string,
    password:string,
    confirmPassword: string,
){
    const api_res:Response = await fetch(`${API_URL}/auth/register`,{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            email:email,
            displayName:displayName,
            password:password,
            confirmPassword:confirmPassword
        }),
    })
    const status = api_res.status; 
    const { message } = await api_res.json();
    return {
        status,
        message
    };
}