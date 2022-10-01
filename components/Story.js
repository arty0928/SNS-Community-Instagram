import Image from "next/future/image";

function Story({img, username}){
    return (
        <div>
            <Image
                className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer
                hover:scale-110 transition transform
                duration-200 ease-out" 
                    src={img} 
                    alt="" 
                    width={42}
                    height={42}/>
            <p className="text-xs w-14 truncate text-center">{username}</p>
        </div>
    )
}

export default Story