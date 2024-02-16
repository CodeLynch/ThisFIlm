import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
const font = Bebas_Neue({ weight:"400", subsets:['latin']});

export default function RegisterForm(){
    return <div className="rounded-lg shadow-lg p-5 bg-white self-center w-full">
    <h1 className={"text-3xl tracking-widest " + font.className}>Register here</h1>
        <form>
            <input className="m-2 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-slate-500 focus:ring-inherit focus:outline-none focus:ring-0 focus:border-black" name="email" placeholder="Email"></input>
            <input className="m-2 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-slate-500 focus:ring-inherit focus:outline-none focus:ring-0 focus:border-black" name="display" placeholder="Display Name"></input>
            <input className="m-2 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-slate-500 focus:ring-inherit focus:outline-none focus:ring-0 focus:border-black" name="pass" type="password" placeholder="Password"></input>
            <input className="m-2 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-slate-500 focus:ring-inherit focus:outline-none focus:ring-0 focus:border-black" name="confirmpass" type="password" placeholder="Confirm Password"></input>
            <div className="flex justify-center">
                <button className=" text-white w-full bg-black hover:bg-cyan-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 focus:outline-none">Register</button>
            </div>
        </form>
        <p className="text-center">Already have an account? <Link href="/" className="text-blue-500 underline">Login</Link> instead</p>
    </div>
}