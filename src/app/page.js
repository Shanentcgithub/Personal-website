import { ButtonSecondary } from "@/components/component/button";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-[#0e2644] p-5"
      style={{ fontFamily: "Century Gothic, sans-serif" }}
    >
      <h1 className="text-5xl sm:text-6xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-yellow-400 transition-colors duration-300">
        WELCOME TO MY
      </h1>
      <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-yellow-400 transition-colors duration-300">
        Personal Website
      </h2>
      <h4 className="text-3xl flex flex-col justify-center sm:text-4xl mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-yellow-400 transition-colors duration-300">
        Aspiring Full-Stack Developer
      </h4>
      
      <Link href="/portfolio">
        <ButtonSecondary />
      </Link>
    </div>
  );
}
