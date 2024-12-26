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
    <div className='h-[100vh] flex flex-col justify-center items-center text-center py-12'>
        <div className='flex flex-col justify-evenly h-full'>
            <h1 className='font-futura text-[5rem] font-semibold stroke-[#363636] text-[#363636] tracking-tighter leading-none'>SKILLS</h1>
            <div className='flex flex-col w-[70vw] gap-12'>
                <Skill skilltype='languages' skilldata={languages} />
                <Skill skilltype='libraries and frameworks' skilldata={libraries} />
                <Skill skilltype='tools' skilldata={tools} />
            </div>
        </div>
    </div>
  )
}



function Skill({skilltype, skilldata}: SkillProp ){
  return (
    <div className='flex flex-col justify-start items-start gap-4'>
      <h1 className='font-futura text-[2rem] font-semibold stroke-[#363636] text-[#363636] tracking-tighter leading-none'>
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