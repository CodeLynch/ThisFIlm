import Image from "next/image";


export default function UserComment(){
    return (<div className="m-2 bg-white rounded-lg p-1 flex flex-row flex-1 border-double border-4 border-slate-500">
    <div className="h-full flex items-center self-center m-0 border-r-2 px-2 border-slate-500">
        <Image src="/images/profile.png" alt="profile" height={50} width={50}/>
    </div>
    <div className="flex flex-row w-full justify-around">
        <div className="flex flex-col w-1/2 p-2 self-center">
            <span className="text-md m-0 font-bold"> James Bond <span className="font-normal">on</span> Movie Name</span>
            <p className="m-0" style={{fontSize:'8px'}}>February 7 1967 18:03</p>
            <p className="text-sm m-0">My name is Bond...James Bond</p> 
        </div>
        <div className="flex w-1/2 p-2 flex-col">
            <div className="w-full flex justify-end">
                <Image className="mr-5" src="/images/thumbsup.png" height={50} width={50} alt="recommended"/>
            </div>
            <p className="text-sm font-bold text-end">Recommended</p> 
        </div>
    </div>
</div>)
}