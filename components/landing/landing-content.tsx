import { Bebas_Neue } from "next/font/google";
import PrimaryButton from "@/components/buttons/primaryButton";
import { FilmIcon, RightArr } from "@/components/icons/icons";
import LoginForm from "@/components/forms/login-form";

const font = Bebas_Neue({ weight:"400", subsets:['latin']});

export default function LandingContent(){
    return <main className="px-20 py-10 h-full">
        <div className="flex flex-row bg-gradient-to-r from-white via-cyan-950 to-black rounded-md p-5">
        <div className="w-2/4">
            <div className="m-5 h-auto flex flex-col">
            <h1 className={"leading-none font-bold text-black " + font.className} style={{fontSize:'76.5px'}} >Talk About Your Favourite Films</h1>
            <h1 className={"leading-none font-bold text-black text-3xl " + font.className}>Login now, to be able to share your thoughts and opinions on the movies you watched</h1>
            </div>
            <div className="m-5">
            <ul className="flex flex-row justify-end">
                <li className="m-5">
                <button className=" flex flex-row text-white w-full bg-black hover:bg-cyan-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 focus:outline-none">
                    <p className="mr-2 ml-5">
                        Browse Movies 
                    </p>
                    <FilmIcon/></button>
                </li>
                <li className="m-5">
                <button className=" flex flex-row text-white w-full bg-black hover:bg-cyan-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 focus:outline-none">
                    <p className="mr-2 ml-5">
                        Create an Account
                    </p>
                    <RightArr/>
                    </button>
                </li>
            </ul>
            </div>
        </div>
        <div className="w-2/4 h-full" >
            <LoginForm/>
        </div>
        </div>      
    </main>
}