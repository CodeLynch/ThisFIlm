import { GetMovieDetail } from "@/helper/MovieHelper";
import { Movie } from "@/types";
import Image from "next/image";

export default function MoviePage(props:{
    movie:Movie;
}){

    /* 
    Id value for each genre:
    Action          28
    Comedy          35
    Drama           18
    Romance         10749
    Horror          27
    Science Fiction 878
    Fantasy         14
    Mystery         9648
    */
    const genreArr = [
        {id:28, name:"Action"},
        {id:35, name:"Comedy"},
        {id:18, name:"Drama"},
        {id:10749, name:"Romance"},
        {id:27, name:"Horror"},
        {id:878, name:"SciFi"},
        {id:14, name:"Fantasy"},
        {id:9648, name:"Mystery"},
    ]
    return <>
        <div className="w-full bg-gradient-to-b from-black to-cyan-950 flex flex-row py-10 px-20">
            <div className="bg-white p-2 h-80 w-56 relative">
                <Image className="object-cover" src={props.movie.poster_path? `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`:"/images/poster-placeholder.png"} alt="poster" fill/>
            </div>
            <div className="mx-5 w-3/4">
                <h1 className="text-white text-5xl font-bold">{props.movie.title}</h1>
                <h1 className="text-white text-xl italic">{props.movie.title === props.movie.original_title? "": "(" + props.movie.original_title + ")"}</h1>
                <h1 className="text-white text-xl">{props.movie.genres.map((genre)=>{
                    return genreArr.find(g => g.id === genre)?.name;
                })}</h1>
                <h1 className="text-white text-2xl"> <span className="font-bold">Release Date: </span>{props.movie.release_date}</h1>
                <h1 className="text-white text-2xl"><span className="font-bold">Language:</span> {props.movie.original_language}</h1>
                <h1 className="text-white text-2xl font-bold">Synopsis:</h1>
                <h1 className="text-white text-xl">{props.movie.overview}</h1>
                <h1 className="text-white text-xl"><span className="font-bold">Runtime:</span> {props.movie.runtime} mins</h1>
            </div>
        </div>
        <div className="flex flex-row py-10 px-20">
            <div className="bg-white p-2 shadow-lg rounded-lg h-96 w-1/4 m-5">
                <h1 className="text-3xl font-bold text-center">This film is...</h1>
            </div>
            <div className="bg-white p-2 shadow-lg rounded-lg h-96 w-3/4 m-5 ">
                <h1 className="text-5xl font-bold text-center">Reviews</h1>
            </div>
        </div>
    </>
}

export async function getServerSideProps(context:{params:{movieid:number}}){
    const { params } = context;
    const movieData = await GetMovieDetail(params.movieid);

    return ({
        props:{
            movie:movieData
        }
    }
    )

}