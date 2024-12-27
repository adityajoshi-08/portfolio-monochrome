import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      <div className="fixed top-5 right-5">
        <img className="w-10" src="/favicon.ico" alt="" />
      </div>
      <Hero />
      <Skills />
      <h1 className="font-futura text-[2rem] font-semibold stroke-[#363636] text-[#363636] tracking-tighter leading-none">Under Construction!</h1>
    </div>
  );
}
