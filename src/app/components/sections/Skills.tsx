'use client'
import React from 'react'
import skills from '@/public/data/skills.json';


interface SkillProp {
  skilltype: string,
  skilldata: any
}

export default function Skills() {
  console.log(skills);
  const languages = skills.languages;
  const libraries = skills.libraries;
  const tools = skills.tools;

  return (
    <div className=' h-[100vh] w-full flex flex-col overflow-hidden justify-center items-center text-center py-12 relative'>
      <div className="absolute top-0 left-0 w-[100vw] h-full ">
        <img src="/images/skillsbg/ethereum.svg" className='w-2/6 object-cover absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] opacity-5' alt="" />
        <img src="/images/skillsbg/blockchain.svg" className='w-60 object-cover rotate-[-12deg] absolute left-16 top-20 opacity-20' alt="" />
        <img src="/images/skillsbg/react.svg" className='w-60 object-cover -rotate-12 absolute left-28 bottom-20 opacity-5' alt="" />
        <img src="/images/skillsbg/desktop.svg" className='w-60 object-cover rotate-10 absolute right-28 top-20 opacity-5' alt="" />
        <img src="/images/skillsbg/tablesetup.svg" className='w-60 object-cover rotate-[20deg] absolute right-28 bottom-20 opacity-20' alt="" />
      </div>
        <div className='flex flex-col justify-between items-center h-full z-10'>
            <h1 className='font-futura text-[5rem] font-semibold stroke-[#363636] text-[#363636] tracking-tighter leading-none'>SKILLS</h1>
            <div className='flex flex-col w-[70vw] gap-[7vh]'>
                <Skill skilltype='languages' skilldata={languages} />
                <Skill skilltype='libraries and frameworks' skilldata={libraries} />
                <Skill skilltype='tools' skilldata={tools} />
            </div>
            <div className="flex items-center">
              <span className='text-[#33ff00] mr-1 text-3xl font-poppins'>•</span>
              <span className="font-poppins text-[#363636] font-medium">always learning :)</span>
            </div>
        </div>
    </div>
  )
}



function Skill({skilltype, skilldata}: SkillProp ){
  return (
    <div className='flex flex-col justify-center items-center gap-4 '>
      
      <h1 className='font-futura text-2xl font-semibold stroke-[#d2d2d2] text-[#c2c2c2] tracking-tighter leading-none'>
        {/* <RoughNotation type="underline">
          Hello RoughNotation
        </RoughNotation> */}
        {skilltype.toUpperCase()}
      </h1>
      <div className='row flex flex-wrap justify-start items-center gap-8'>
        {skilldata.map((skill: any, index: number) => (
          <div key={index} className='rounded-xl shadow-md'>
            <a href={skill.link} target='_blank'>
              <img src={skill.image} alt={skill.name} />
            </a>
          </div>
        ))}
      </div>
    </div>

  )
}