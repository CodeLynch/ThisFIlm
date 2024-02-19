import { Bebas_Neue } from "next/font/google";
import PaginationComponent from "../components/pagination/pagination";
import MovieCard from "@/components/movie/movie-card";
import { Movie } from "@/types";
import { GetNewMovies } from "@/helper/MovieHelper";

const font = Bebas_Neue({ weight:"400", subsets:['latin']});

export default function DiscoverPage(props:{
    results:Movie[];
    page: number;
    total_pages: number;
}){
    return <>
    <div className="bg-gradient-to-b from-black to-cyan-950 h-1/2">
    <div className="px-20 py-10">
        <h1 className={"m-0 text-4xl text-white " + font.className}>Welcome, Name!</h1>
        <h1 className={"m-0 text-2xl text-white " + font.className}>Here are the latest releases...</h1>
    </div>
    </div>
    <div className="grid grid-cols-4 px-10">
        {
            props.results.map((movie, key)=>{
                return <MovieCard key={key} title={movie.title} release={movie.release_date} runtime={movie.runtime}/>
            })
        }
    </div>
    <div className="flex justify-center pb-12">
        <PaginationComponent page={props.page} lastPage={props.total_pages}/>
    </div>
    </>
}

export async function getServerSideProps(context:{query:{page:string}}){
    const {query} = context;

    const data = await GetNewMovies(parseInt(query.page) || 1);

    console.log(data);

    return({
        props: data,
    })
}