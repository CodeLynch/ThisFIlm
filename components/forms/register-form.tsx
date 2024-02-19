import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { FormEvent, useRef } from "react";
import { RegisterUser } from "@/helper/UserHelper";
import { useRouter } from "next/router";
const font = Bebas_Neue({ weight:"400", subsets:['latin']});

export default function RegisterForm(){
    const emailRef = useRef<HTMLInputElement>(null);
    const displayRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const confirmRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    async function onSubmit(event:FormEvent){
        event.preventDefault();
        
        const email = emailRef.current!.value;
        const displayName = displayRef.current!.value;
        const password = passRef.current!.value;
        const confirmPassword = confirmRef.current!.value;


        const register = await RegisterUser(email, displayName, password, confirmPassword);
        if(register.status === 201){
            router.replace('/');
        }else{
            alert(register.message[0] || register.message);
        }
    }
    return <div className="rounded-lg shadow-lg p-5 bg-white self-center w-full">
    <h1 className={"text-3xl tracking-widest " + font.className}>Register here</h1>
        <form onSubmit={onSubmit}>
            <input required className="m-2 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-slate-500 focus:ring-inherit focus:outline-none focus:ring-0 focus:border-black" name="email" placeholder="Email" ref={emailRef}></input>
            <input required className="m-2 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-slate-500 focus:ring-inherit focus:outline-none focus:ring-0 focus:border-black" name="display" placeholder="Display Name" ref={displayRef}></input>
            <input required className="m-2 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-slate-500 focus:ring-inherit focus:outline-none focus:ring-0 focus:border-black" name="pass" type="password" placeholder="Password" ref={passRef}></input>
            <input required className="m-2 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-slate-500 focus:ring-inherit focus:outline-none focus:ring-0 focus:border-black" name="confirmpass" type="password" placeholder="Confirm Password" ref={confirmRef}></input>
            <button type="submit" className=" flex justify-center text-white w-full bg-black hover:bg-cyan-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 focus:outline-none" >Register</button>
        </form>
        <p className="text-center">Already have an account? <Link href="/" className="text-blue-500 underline">Login</Link> instead</p>
    </div>
}