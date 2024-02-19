const API_URL = "http://localhost:8000/api";

export async function GetNewMovies(page:number){
    const api_res:Response = await fetch(`${API_URL}/movie/fresh?page=${page}`,{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    const data = await api_res.json();
    return data;
}

export async function GetMovieDetail(id:number){
    const api_res:Response = await fetch(`${API_URL}/movie/${id}`,{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    const data = await api_res.json();
    return data;
}