import Image from "next/image";
import styles from './movie-card.module.css';

export default function MovieCard(props:{
    title: string,
    release: string,
    runtime: number,
}){
    return <div className={"transition-all bg-black shadow-lg rounded-lg cursor-pointer h-72 w-56 m-10 " + styles.mcard}>
        <div className="h-72 w-56 relative z-0 opacity-50">
            <Image className="object-cover rounded-lg" src="/images/unsplashfantasy.jpg" alt="movie card" fill={true}/>
        </div>
        <div className={styles.details}>
            <span className="h-12 absolute -mt-16 text-3xl text-white ml-2 text-ellipsis overflow-hidde">
                {props.title}
            </span>
            <span className="absolute -mt-9 text-xl text-white ml-2 flex justify-between">
                <span className="mr-16">
                    {props.release} 
                </span>
                <span>
                    {props.runtime} mins
                </span>
            </span>
        </div>
    </div>
}
