import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import Comment from "@/components/profile/user-comment";
import UserComment from "@/components/profile/user-comment";

const font = Bebas_Neue({ weight:"400", subsets:['latin']});

export default function ProfilePage(){
    return <div className="flex flex-row bg-gradient-to-t from-black from-10% via-cyan-950 via-20% to-white to-70%  px-20 py-2 ">
    <div className="rounded-lg shadow-lg w-1/4 h-full m-5 p-5 bg-white">
        <div className="flex flex-col">
            <h1 className={"text-3xl text-center " + font.className}>James Bond</h1>
            <div className="flex justify-center m-5">
                <Image src="/images/profile.png" alt="profile" height={150} width={150}/>
            </div>
            <p className="text-center m-2">youremail@email.com</p>
            <button className=" text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 focus:outline-none">Delete Account</button>
            <button className=" text-white bg-black hover:bg-cyan-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 focus:outline-none">Logout</button>
        </div>
    </div>
    <div className="bg-white rounded-lg shadow-lg w-full h-full m-5 py-2 px-5">
        <h1 className={"text-2xl " + font.className}>Comments History</h1>
        <div className="h-auto w-full flex flex-col">
            <UserComment/>
            <UserComment/>
            <UserComment/>
            <p className="text-center">Pagination here: &lt; 1, 2, 3, 4, ... &gt; </p>
        </div>
    </div>
    </div>
}