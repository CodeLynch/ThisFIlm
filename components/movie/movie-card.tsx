import Image from "next/image";
import styles from './movie-card.module.css';

export default function MovieCard(props:{
    title: string,
    release: string,
    runtime: number,
    poster: string,
}){
    return <div className={"transition-all bg-black shadow-lg rounded-lg cursor-pointer h-72 w-56 m-10 " + styles.mcard}>
        <div className={"h-72 w-56 relative z-0 opacity-50 " + styles.imagediv }>
            <Image className="object-cover rounded-lg" src={props.poster? `https://image.tmdb.org/t/p/w500${props.poster}`: "/images/poster-placeholder.png"} alt="movie card" fill={true}/>
        </div>
        <div className={styles.details}>
            <span className="h-12 absolute h-8 w-40 -mt-16 text-2xl text-white ml-2 text-ellipsis overflow-hidden whitespace-nowrap">
                {props.title}
            </span>
            <span className="absolute -mt-9 text-xl text-white ml-2 flex justify-between">
                <span className="mr-16">
                    {props.release} 
                </span>
                <span>
                    {props.runtime?
                     props.runtime + " mins":
                     ""
                    } 
                </span>
            </span>
        </div>
    </div>
}
