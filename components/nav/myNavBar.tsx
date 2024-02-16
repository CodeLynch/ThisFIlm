import Image from "next/image"
import { ProfileIcon } from "../icons/icons"
import Link from "next/link"
export default function MyNavBar(){
    return <main className="h-full mt-auto flex flex-row py-2 px-7 justify self-stretch bg-black">
        <div>
            <Link href="/">
                <Image src="/images/movieAppLogoVer2.png" height={100} width={200} alt="ThisFilm Logo"/>
            </Link>
        </div>
        <div className="flex flex-row w-full justify-end">
            <ul className="flex space-x-4 p-0 items-center">
                <Link href="/search">
                    <li className="cursor-pointer inline-block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium ">Search</li>
                </Link>
                <Link href="/register">
                    <li className="cursor-pointer inline-block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">Register</li>
                </Link>
                <Link href="/profile">
                    <li className="cursor-pointer inline-block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"><ProfileIcon/></li>
                </Link>
            </ul>
        </div>
    </main>
}