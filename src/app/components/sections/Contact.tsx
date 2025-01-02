'use client'
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function Contact() {

  return (
      <div className='bg-[#D2D2D2] h-[100vh] w-full flex justify-center'>
        <div className="container flex flex-col justify-center items-center gap-8">
          <h1 className='contact-text text-white phone:text-[7rem] lg:text-[25rem] font-futura font-regular stroke-[#363636] tracking-tight leading-none'>CONTACT</h1>
          <div className="flex flex-col items-center justify-center gap-3">
            <a href="mailto:adityajoshi304@gmail.com" target='_blank' className='email phone:text-lg text-[#363636] hover:text-white  font-futura font-regular stroke-[#363636] tracking-tight leading-none transition-all duration-300'>ADITYAJOSHI304@GMAIL.COM</a>
            <div className="links flex flex-col text-center">
              <a href="https://www.linkedin.com/in/adityaexe/" target='_blank' className='text-[#363636] hover:text-white text-sm font-futura font-regular stroke-[#363636] tracking-tight leading-none transition-all duration-300'>LINKEDIN</a>
              <a href="https://github.com/adityajoshi-08" target='_blank' className='text-[#363636] hover:text-white text-sm font-futura font-regular stroke-[#363636] tracking-tight leading-none transition-all duration-300'>GITHUB</a>
              <a href="https://www.twitter.com/aditya__exe/" target='_blank' className='text-[#363636] hover:text-white text-sm font-futura font-regular stroke-[#363636] tracking-tight leading-none transition-all duration-300'>TWITTER</a>
            </div>
          </div>
        </div>
      </div>
  );
}
