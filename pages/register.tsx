import RegisterForm from "@/components/forms/register-form";
import { Bebas_Neue } from "next/font/google";
const font = Bebas_Neue({ weight:"400", subsets:['latin']});

export default function RegisterPage(){
    return <div className="px-20 pb-20 pt-5 bg-gradient-to-t from-black from-10% via-cyan-950 via-20% to-white to-70% h-full">
        <h1 className={"text-5xl m-2 " + font.className}>Welcome to the party, pal!</h1>
        <div className="flex justify-center">
            <div className="h-2/4 w-2/4">
                <RegisterForm/>
            </div>
        </div>
    </div>
}