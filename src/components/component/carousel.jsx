import React, { useState } from 'react'; 
import { Card, CardContent } from '@/components/ui/card'; 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'; 
import Image from 'next/image';
import Link from 'next/link'; 

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-[#1c3755] text-white rounded-lg p-6 w-[600px] h-[600px] shadow-xl overflow-y-auto relative"> {/* Adjusted height here */}
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Project Details</h2>
          <button
            className="mt-4 px-4 py-2 bg-[#00509e] text-white rounded-lg hover:bg-[#003366] transition-colors" // Darker blue
            onClick={onClose}
          >
            Close
          </button>
        </div>

        {content.imageUrl && (
          <Image
            src={content.imageUrl}
            alt="Project"
            className="mb-4 rounded-lg object-cover"
            width={600} 
            height={300} 
          />
        )}

        <div className="text-gray-300">
          <h3 className="text-lg font-semibold">Description</h3>
          <p className="whitespace-pre-wrap mb-4">{content.description}</p>
          
          <h3 className="text-lg font-semibold">Challenges</h3>
          <p className="whitespace-pre-wrap mb-4">{content.challenges}</p>
          
          <h3 className="text-lg font-semibold">Technologies Used</h3>
          <p className="whitespace-pre-wrap mb-4">{content.technologies}</p>
          
          <h3 className="text-lg font-semibold">Outcome</h3>
          <p className="whitespace-pre-wrap mb-4">{content.outcome}</p>
          
          <h3 className="text-lg font-semibold">Project Date</h3>
          <p className="whitespace-pre-wrap mb-4">{content.projectDate}</p>

          {content.projectName === 'PROJECT2' && (
            <a 
              href="https://project-2-git-main-shanentcgithubs-projects.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block mt-4 px-4 py-2 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-colors"
            >
              Visit Project 2 Site
            </a>
          )}
        </div>
      </div>
    </div>
  );  
};

export function CarouselDemo() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const projectDescriptions = [
    {
      projectName: 'PROJECT2',
      description: 'This project is a sample of my front-end design, its a E-commerce platform of Electric vehicles.',
      challenges: 'Developing a user-friendly interface and ensuring accurate calculations while handling edge cases, such as dividing by zero and managing large numbers.',
      technologies: 'Typescript, JavaScript, Tailwind CSS, React, Next.js',
      outcome: 'Successfully created a responsive E-commerce website for electric vehicles.',
      projectDate: 'October 2024',
      imageUrl: '/ssp2.png',
    },
    {
      projectName: 'Navigating the Digital Garage',
      description: 'In todays digital world, the automotive industry is rapidly evolving...',
      challenges: 'Challenges included user engagement and integrating various service providers into the platform.',
      technologies: 'Figma for prototyping, Javascript, php, HTML, CSS, and mySQL.',
      outcome: 'Successfully created a platform that improved communication between vehicle owners and service providers...',
      projectDate: 'January 2024',
      imageUrl: '/EAcar.png',
    },
    {
      projectName: 'Baranggay Management System',
      description: 'The Barangay Management System is an integrated platform designed to streamline the administration of barangay services...',
      challenges: 'Challenges include ensuring data accuracy, user adoption, and maintaining system security.',
      technologies: 'HTML, Node.js, CSS, and mySQL.',
      outcome: 'The system enhances efficiency in barangay administration...',
      projectDate: 'September 2023',
      imageUrl: '/bms.png',
    },
    {
      projectName: 'To do List application',
      description: 'The To Do List Application helps users manage their tasks effectively...',
      challenges: 'Challenges faced during development included managing state effectively...',
      technologies: 'Java, XML, SQLite, and Android Studio for development.',
      outcome: 'The application enhances productivity by allowing users to organize their tasks...',
      projectDate: 'March 2024',
      imageUrl: '/todolistapp.png',
    },
    {
      projectName: 'Metamask web wallet',
      description: 'The MetaMask Web Wallet is a browser extension that allows users to manage their cryptocurrency assets...',
      challenges: 'Challenges include ensuring security against phishing attacks...',
      technologies: 'JavaScript, HTML and CSS for the user interface.',
      outcome: 'The wallet offers a secure and user-friendly interface for managing digital assets...',
      projectDate: 'May 2024',
      imageUrl: '/metamaskwallet.png',
    },
    {
      projectName: 'Basic calculator app for anroid',
      description: 'This project is a simple yet functional calculator application developed for Android devices...',
      challenges: 'Developing a user-friendly interface and ensuring accurate calculations...',
      technologies: 'Android Studio, Java/Kotlin',
      outcome: 'Successfully created a responsive calculator app that performs basic functions...',
      projectDate: 'May 2024',
      imageUrl: '/basiccalculator.png',
    },
  ];

  const handleItemClick = (index) => {
    setCurrentItem(projectDescriptions[index]);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentItem(null);
  };

  return (
    <div>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {projectDescriptions.map((project, index) => ( 
            <CarouselItem key={index}>
              <div className="p-1">
                <Card
                  onClick={() => handleItemClick(index)}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <CardContent className="flex aspect-square items-center justify-center p-6 bg-gradient-to-r from-[#0b1d33] to-[#60a5fa] hover:from-[#60a5fa] hover:to-[#0e2644] transition-colors text-white rounded-lg">
                    <span className="text-4xl font-semibold">{project.projectName}</span> 
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />    
        <CarouselNext />
      </Carousel>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={currentItem} />
    </div>
  );
}
