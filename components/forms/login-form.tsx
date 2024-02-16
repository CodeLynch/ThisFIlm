import { Bebas_Neue } from "next/font/google";

const font = Bebas_Neue({ weight:"400", subsets:['latin']});

export default function LoginForm(){
    return <div className="bg-white h-80 flex flex-col rounded-lg shadow-lg p-10 self-center m-4">
    <h1 className={"text-5xl text-center tracking-widest " + font.className}>Login</h1>
    <form className="flex flex-col">
        <input className="my-5 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-slate-500 focus:ring-inherit focus:outline-none focus:ring-0 focus:border-black" name="email" placeholder="Email"></input>
        <input className="mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-slate-500 focus:ring-inherit focus:outline-none focus:ring-0 focus:border-black" name="password" type="password" placeholder="Password"></input>
        <div className="flex justify-center">
            <button className=" text-white bg-black hover:bg-cyan-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 m-5 focus:outline-none">
                <p className="mx-10">
                Login
                </p>
                </button>
        </div>
    </form>
    </div>
}