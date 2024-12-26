"use client"
import Image from "next/image"

export default function Hero() {

  return (
    <div className='h-[100vh] flex flex-col justify-evenly items-center text-center py-6'>
      <div className="top-section">
        <div className="nav">
          <h3 className='font-futura cursor-default font-medium text-xs text-[#363636]'>INDIA🇮🇳  • REMOTE 🗺️</h3>
          <h3 className='font-futura text-xs text-[#d2d2d2] font-medium'><a href="mailto:adityajoshi304@gmail.com">ADITYAJOSHI304@GMAIL.COM</a></h3>
        </div>
      </div>
      <div className="mid flex flex-col justify-center items-center gap-7">
        <div className="row">
          <h1 className="name font-futura text-[6rem] font-semibold stroke-black text-[#363636] tracking-tighter">ADITYA JOSHI</h1>
        </div>
        <div className="row flex relative ">
          <div className="photo h-[12rem] w-[12rem] drop-shadow-2xl rounded-2xl p-2 flex items-center justify-center overflow-hidden bg-white relative rotate-[-2deg]">
            <Image src="/svg/1.svg" alt="SVG" width={100} height={100} className="h-full w-full object-contain" />
          </div>
          <div className="photo h-[12rem] w-[12rem] drop-shadow-2xl rounded-2xl p-2 flex items-center justify-center overflow-hidden bg-white relative rotate-[4deg] ">
            <Image src="/svg/2.svg" alt="SVG" width={100} height={100} className="h-full w-full object-contain" />
          </div>
          <div className="photo h-[12rem] w-[12rem] drop-shadow-2xl rounded-2xl p-2 flex items-center justify-center overflow-hidden bg-white relative rotate-[-8deg]">
            <Image src="/svg/3.svg" alt="SVG" width={100} height={100} className="h-full w-full object-contain" />
          </div>
          <div className="photo h-[12rem] w-[12rem] drop-shadow-2xl rounded-2xl p-2 flex items-center justify-center overflow-hidden bg-white relative rotate-[1.39deg]">
            <Image src="/svg/4.svg" alt="SVG" width={100} height={100} className="h-full w-full object-contain" />
          </div>
          <div className="photo"></div>
          <div className="photo"></div>
          <div className="photo"></div>
        </div>
        <div className="row mt-8">
          <h1 className="font-futura text-[6rem] font-semibold stroke-[#D2D2D2] text-[#D2D2D2] tracking-tighter leading-none">DEVELOPER &</h1>
          <h1 className="font-futura text-[6rem] font-semibold stroke-[#D2D2D2] text-[#D2D2D2] tracking-tighter leading-none">COMMUNITY BUIDLER</h1>
        </div>
      </div>

      <div className="flex items-center">
        <span className='text-[#33ff00] mr-1 text-3xl font-poppins'>•</span>
        <span className="font-poppins text-[#363636] font-medium">open to work!</span>
      </div>
    </div>
  )
}
