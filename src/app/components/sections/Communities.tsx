"use client"
import React from 'react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import communities from '@/public/data/communities.json'
interface CommunityProps {
  name: string,
  image: string,
  link: string,
  width?: number,
  height?: number
}

export default function Communities() {
  return (
    <div className='flex flex-col items-center justify-center w-[90vw] min-h-[100vh] mb-[10vh]'>
        <h1 className="font-futura phone:text-[3.25rem] lg:text-[5rem] font-semibold stroke-[#363636] text-[#363636] tracking-tighter leading-none text-center">PROOF OF COMMUNITY</h1>
        <p className="text-[#d2d2d2] phone:text-xl lg:text-[2rem] font-futura font-regular tracking-tighter leading-none text-center">communities and companies i've worked with</p>
        <div className='flex flex-wrap items-center gap-10 justify-center mt-12'>
          {communities.map((community) => (
            <CommunityCard key={community.name} {...community} />
          ))}
        </div>
    </div>
  )
}

function CommunityCard({ name, image, link, width, height }: CommunityProps) {
  // Default fallback dimensions
  const defaultWidth = 100; // Adjust as needed
  const defaultHeight = 100;

  return (
    <div className="bg-cyan-200 phone:flex-col flex items-center justify-center phone:w-[80vw] phone:h-[60vw] lg:w-[40vh] lg:h-[40vh] rounded-3xl shadow-2xl">
      <div className="flex flex-col items-center justify-around h-[80%] w-[80%] gap-3 py-3">
        <Image
          src={image}
          alt={name}
          width={width || defaultWidth} // Use provided width or fallback
          height={height || defaultHeight} // Use provided height or fallback
        />
        <button
          onClick={() => window.open(link, "_blank")}
          className="bg-[#363636] text-[#d2d2d2] text-base px-5 py-2 rounded-xl font-futura font-semibold max-w-[100%]"
        >
          {name.toUpperCase()}
        </button>
      </div>
    </div>
  );
}