"use client"

import Link from "next/link"
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"


export default function Page() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (

    <main className="flex flex-col justify-center items-center gap-3 min-h-screen w-[90%] max-w-100">

      <h1 className="text-2xl font-bold tablet:mb-2 table:text-4xl" data-aos="fade-up" >Roblox API Info</h1>

      <p 
        className="font-medium text-justify text-[12px] table:text-[16px] w-[80%] tablet:w-full" 
        data-aos="fade-up" data-aos-delay="200"
      >
        This application is quite simple. It just extracts the content from the Roblox HTML page and provides it to the client.
      </p>

      <Link 
        className="bg-primary-color font-bold py-2 px-5 text-center rounded-[10px] w-[80%] tablet:w-full duration-500 hover:bg-primary-color-hover" 
        href={"/users"}
        data-aos="fade-up" data-aos-delay="400"
      >
        Search by user
      </Link>

    </main>

  )

}