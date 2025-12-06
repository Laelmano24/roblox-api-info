"use client"

import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useRouter } from "next/navigation"

export default function Page() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true })
    }, [])

    const [usersId, setUsersId] = useState("")
    const router = useRouter()

    function clickButton() {
        router.push(`/users/${usersId}`)
    }

    return (

        <main className="flex flex-col justify-center items-center gap-3 min-h-screen w-80" >

            <h1 className="text-2xl font-bold tablet:mb-2 table:text-4xl" data-aos="fade-in" >Roblox API Info</h1>

            <input 
                type="number"
                placeholder="Enter the user Id"
                className="border-2 border-border-color rounded-[5px] py-1 px-2 font-medium w-[80%]"
                data-aos="fade-up" data-aos-duration="400"
                onChange={(e) => setUsersId(e.target.value)}
            />

            <button 
                className="bg-primary-color font-bold py-2 px-5 rounded-[10px] w-[80%] duration-500 hover:bg-primary-color-hover"
                onClick={clickButton}
                data-aos="fade-up" data-aos-duration="600"
            >
                Search user
            </button>

        </main>

    )
    
}