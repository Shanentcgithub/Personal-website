"use client";
import { Button2 } from '@/components/component/button2';
import { CardWithForm } from '@/components/component/card';
import { CardWithForm2 } from '@/components/component/card2';
import { CardWithForm3 } from '@/components/component/card3';
import { CardWithForm4 } from '@/components/component/card4';
import { CardWithForm5 } from '@/components/component/card5';
import { CardWithForm6 } from '@/components/component/card6';
import { CardWithForm7 } from '@/components/component/card7';
import { CardWithForm8 } from '@/components/component/card8';
import { CarouselDemo } from '@/components/component/carousel';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from "next/link";
import { useEffect } from 'react';
import Typed from 'typed.js';

export default function Portfolio() {
  useEffect(() => {
    const options = {
      strings: ["Frontend Developer", "Designer", "Web Developer"],
      typedSpeed: 70,
      backSpeed: 55,
      loop: true,
    };

    const typed = new Typed(".input", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0e2644] overflow-y-auto">
      <header className="p-5 bg-[#0b1d33]">
        <nav className="flex justify-between items-center flex-wrap">
          <h1 className="text-[#60a5fa] text-3xl font-bold">Portfolio</h1>
          <ul className="flex space-x-6 mt-4 sm:mt-0">
            <li>
              <Link className="text-lg sm:text-xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-yellow-400 transition-colors duration-300" href="/">Home</Link>
            </li>
            <li>
              <Link className="text-lg sm:text-xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-yellow-400 transition-colors duration-300" href="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link className="text-lg sm:text-xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-yellow-400 transition-colors duration-300" href="#skills">Skills</Link>
            </li>
            <li>
              <Link className="text-lg sm:text-xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-yellow-400 transition-colors duration-300" href="#projects">Projects</Link>
            </li>
            <li>
              <Link className="text-lg sm:text-xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-yellow-400 transition-colors duration-300" href="#experience">Experience</Link>
            </li>
            <li>
              <Link className="text-lg sm:text-xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-yellow-400 transition-colors duration-300" href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div id="home" className="flex flex-col md:flex-row justify-center items-center p-5 md:p-10">
        <div className="flex-shrink-0 mb-10 md:mb-1 md:mr-10">
          <Image
            src="/main_photo.png"
            alt="Shane Rodane Salonga"
            width={300}
            height={289}
            className="rounded-full transition-transform duration-300 hover:scale-110"
          />
        </div>

        <div className="flex-grow text-center md:text-left gap-10 w-full max-w-lg md:max-w-2xl px-4 md:px-10">
          <div className="flex flex-col md:flex-row">
            <h1 className="text-xl sm:text-2xl mb-4 text-white">Hi, I'm a</h1>
            <h2 className="text-xl sm:text-2xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-yellow-400 transition-colors duration-300">
              <span className="input"></span>
            </h2>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl mb-5 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-yellow-400 transition-colors duration-300">
            Shane Rodane Salonga
          </h1>
          <p className="text-lg sm:text-xl mb-4 text-white">
            I'm passionate about web design, architecture, and engineering. I'm currently pursuing a full-stack developer path as an IT graduate. My experience as a front-end developer has sharpened my problem-solving and creativity in building user-friendly websites.
          </p>
          <div className="flex justify-center md:justify-start mb-10">
            <Link href="#contact">
              <Button2>Hire Me</Button2>
            </Link>
          </div>
        </div>
      </div>


      <div id="skills" className="flex flex-col items-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-5xl mb-5 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-yellow-400 transition-colors duration-300">
          SKILLS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
          <CardWithForm />
          <CardWithForm2 />
          <CardWithForm3 />
          <CardWithForm4 />
          <CardWithForm5 />
          <CardWithForm6 />
          <CardWithForm7 />
          <CardWithForm8 />
        </div>
      </div>


      <div id="projects" className="flex flex-col items-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-5xl mb-5 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-yellow-400 transition-colors duration-300">
          PROJECTS
        </h1>

        <div className="flex justify-center items-center w-full max-w-6xl px-4">
          <Card className="bg-[#1c3755] text-white border border-[#2c4a67] shadow-lg rounded-xl p-6 w-full max-w-3xl flex flex-col items-center">
            <div className="w-full flex justify-center">
              <CarouselDemo />
            </div>
          </Card>
        </div>
      </div>


      <div id="experience" className="flex flex-col items-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-5xl mb-5 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-yellow-400 transition-colors duration-300">
          EXPERIENCE
        </h1>
        <div className="flex flex-col items-start w-full max-w-3xl px-4">
         <div className="bg-[#1c3755] text-white border border-[#2c4a67] shadow-lg rounded-xl p-6 mb-4 w-full">
            <h2 className="text-xl font-bold">Capstone Project</h2>
            <p>Date: January 2024 - Present</p>
            <p>Job Title: Frontend Developer</p>
            <p>Accomplishments: Developed and maintained web applications, improved site performance by 30%, collaborated with designers to enhance user experience.</p>
          </div>
          <div className="bg-[#1c3755] text-white border border-[#2c4a67] shadow-lg rounded-xl p-6 mb-4 w-full">
            <h2 className="text-xl font-bold">Front end developer</h2>
            <p>Date: December 2022 - January2023</p>
            <p>Job Title: Front-end Development Intern</p>
            <p>Accomplishments: Developed responsive and accessible web pages using HTML, CSS, and JavaScript, Designed website interfaces, leveraging UI/UX design experience using Figma
            Optimized website performance and user experience.</p>
          </div>
          <div className="bg-[#1c3755] text-white border border-[#2c4a67] shadow-lg rounded-xl p-6 mb-4 w-full">
            <h2 className="text-xl font-bold">Baranggay system maintenance</h2>
            <p>Date: april 2022 - november  2022</p>
            <p>Job Title: Frontend Developer and maintenance</p>
            <p>Accomplishments: Developed and maintained a local system, bug fixes and designing to have a presentable system and user friendly.</p>
          </div>
          <div className="bg-[#1c3755] text-white border border-[#2c4a67] shadow-lg rounded-xl p-6 mb-4 w-full">
            <h2 className="text-xl font-bold">Atongs auto works</h2>
            <p>Date: June 2018 - present</p>
            <p>Job Title: ECU programmer and technician</p>
            <p>Accomplishments: started as a assistant and studied the ecu programming sector and the electrician works and technician works, and till now im embracing all the knowledge that ive gain from years of experience.</p>
          </div>
          </div>
         </div>


      <footer id="contact" className="flex flex-col items-center mb-8 bg-[#0b1d33] text-white text-center py-5z">
        <h1 className="text-2xl sm:text-4xl md:text-6xl mb-5 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-yellow-400 transition-colors duration-300">
          CONTACT
        </h1>
        <div className="text-lg text-white">
          <p>Email: shanerodanesalonga@gmail.com</p>
          <p>Phone: 09695921541</p>
          <p>© 2024 Shane Rodane Salonga. All rights reserved.</p>
        <p className="mt-2">Follow me on <Link href="https://www.linkedin.com/in/shane-rodane-salonga-7a3200333/" className="text-blue-400 hover:underline">LinkedIn</Link></p>
        </div>
      </footer>
    </div>);
}