import { prepareUser, typeResultUserInfo } from "@/utils/prepare-infos"
import Link from "next/link"

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
        
    try {
        const response = await fetch(`https://www.roblox.com/pt/users/${id}/profile`)
        const htmlContent = await response.text()

        if (response.status === 404) {

            return (

                <main className="flex flex-col gap-2 items-center justify-center min-h-screen w-80" >

                    <h2 className="font-bold text-[25px]" >User not found</h2>
                    <Link
                        href={"/users"} 
                        className="bg-white text-[14px] text-black text-center font-bold w-[30%] py-1.5 px-2 border-2 duration-200 rounded-[5px] hover:bg-black hover:text-white hover:border-white" >
                        Back
                    </Link>

                </main>

            )

        }

        const playerInfo: typeResultUserInfo = prepareUser(htmlContent)

        return (

            <main className="flex items-center justify-center min-h-screen" >

                <div className="flex flex-col items-center gap-4 border-2 border-white py-8 px-10 rounded-[8px] w-[80%] table:w-50" >
                    <img
                        className="w-50"
                        src={playerInfo.imageUrl} 
                        alt={playerInfo.username} 
                    />
                    <h2 className="tablet:text-3xl text-[18px] font-bold" >{playerInfo.displayName}</h2>
                    <Link 
                        href={`/api/users/${id}`}
                        className="bg-white text-black text-[12px] w-full text-center max-w-25 font-bold py-1.5 px-4 border-2 duration-200 rounded-[5px] hover:bg-black hover:text-white hover:border-white"
                    >
                        Api mode
                    </Link>
                </div>

            </main>

        )

    } catch(err) {
        return (

            <main className="flex items-center justify-center min-h-screen" >

                <h1>Server error</h1>

            </main>

        )
    } 
}