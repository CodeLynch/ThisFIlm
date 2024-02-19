import Image from "next/image";

export default function MoviePage(){
    return <>
        <div className="h-4/5 w-full bg-gradient-to-b from-black to-cyan-950 flex flex-row py-10 px-20">
            <div className="bg-white p-2">
                <Image src="/images/poster-placeholder.png" alt="poster" height={500} width={500}/>
            </div>
            <div className="mx-5">
                <h1 className="text-white text-5xl font-bold">Movie Title</h1>
                <h1 className="text-white text-xl italic">(Original Name)</h1>
                <h1 className="text-white text-xl">Genres, Genres, Genres</h1>
                <h1 className="text-white text-2xl"> <span className="font-bold">Release Date:</span> 1972-04-29</h1>
                <h1 className="text-white text-2xl"><span className="font-bold">Language:</span> English</h1>
                <h1 className="text-white text-2xl font-bold">Synopsis:</h1>
                <h1 className="text-white text-xl">In the town where I was born lived a man who sailed to sea and he told us of his life in the land of submarines. So we sailed up to the sun 'til we found the sea of green and we lived beneath the waves in our yellow submarine</h1>
                <h1 className="text-white text-xl"><span className="font-bold">Runtime:</span> 150 mins</h1>
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