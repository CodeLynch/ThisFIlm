import Image from "next/image";
import { Oswald } from "next/font/google";
import styles from './genre-card.module.css'

const font = Oswald({ weight:"500", subsets:['latin']});
export default function GenreCard(props:{img:string, genre:string}){
    return <>
    <div className={"transition-all bg-gradient-to-b from-cyan-950 to-black shadow-lg rounded-lg cursor-pointer h-72 w-72 m-5 " + styles.gcard }>
        <div className="h-72 w-72 relative z-0 opacity-50">
            <Image className="object-cover rounded-lg" src={props.img} alt={props.genre} fill={true}/>
        </div>
        <div className="absolute -mt-12 text-white text-4xl z-30 w-72 ml-5">
            <p className={font.className}>{props.genre}</p>
        </div>
    </div>
    </>
}