import GenreCard from "@/components/genre/genre-card";
import SearchHeader from "@/components/search/search-header";
import { Bebas_Neue } from "next/font/google";

const font = Bebas_Neue({ weight:"400", subsets:['latin']});

export default function SearchPage(){
    return <main className="pb-10">
        <SearchHeader/>
        <div className="p-5 px-10">
            <div className="h-1/2">
                <h1 className={"m-0 text-4xl text-center mx-5 " + font.className}>Search by genre</h1>
            </div>
            <div className="grid grid-cols-4">
                <GenreCard img="/images/unsplashaction.jpg" genre="Action"/>
                <GenreCard img="/images/unsplashcomedy.jpg" genre="Comedy"/>
                <GenreCard img="/images/unsplashdrama.jpg" genre="Drama"/>
                <GenreCard img="/images/unsplashromance.jpg" genre="Romance"/>
                <GenreCard img="/images/unsplashhorror.jpg" genre="Horror"/>
                <GenreCard img="/images/unsplashscifi.jpg" genre="SciFi"/>
                <GenreCard img="/images/unsplashfantasy.jpg" genre="Fantasy"/>
                <GenreCard img="/images/unsplashmystery.jpg" genre="Mystery"/>
            </div>
        </div>
    </main>
}