"use client"
import { redirect } from "next/navigation";
import Communities from "./components/sections/Communities";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-evenly relative overflow-x-hidden">
      <div onClick={() => redirect("/")} className="cursor-pointer fixed top-5 right-5">
        <img className="w-10 rounded-full transform scale-x-[-1]" src="/images/pp.jpg" alt="" />
      </div>
      <Hero />
      <Skills />
      <Communities />
      <Contact />
      <h1 className="hidden font-futura text-[2rem] font-semibold stroke-[#363636] text-[#363636] tracking-tighter leading-none">Under Construction!</h1>
    </main>
  );
}
