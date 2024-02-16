import SearchBar from "./search-bar";
import { Bebas_Neue } from "next/font/google";

const font = Bebas_Neue({ weight:"400", subsets:['latin']});

export default function SearchHeader(){
    return <div className="bg-gradient-to-b from-black to-cyan-950 h-1/2">
    <div className="px-20">
        <h1 className={"m-0 text-4xl text-center text-white " + font.className}>Search your feelings, you know it to be true...</h1>
        <h1 className={"m-0 text-2xl text-center mb-5 text-white " + font.className}>look for your favourite movies here</h1>
        <div className="p-5">
            <SearchBar/>
        </div>
    </div>
    </div>
}