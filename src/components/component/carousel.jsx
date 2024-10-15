import React, { useState } from 'react'; // Import React and useState
import { Card, CardContent } from '@/components/ui/card'; // UI components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'; // Carousel components
import Image from 'next/image';
// Modal component
const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-[#1c3755] text-white rounded-lg p-6 w-[600px] h-[600px] shadow-xl overflow-y-auto relative"> {/* Adjusted height here */}
        
        {/* Header with close button */}
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
            className="mb-4 rounded-lg w-full h-[300px] object-cover" // Fixed size and object-fit
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
          <p className="whitespace-pre-wrap">{content.projectDate}</p>
        </div>
      </div>
    </div>
  );  
};

export function CarouselDemo() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  // Updated project descriptions with project names
  const projectDescriptions = [
    {
      projectName: 'Navigating the Digital Garage',
      description: 'In todays digital world, the automotive industry is rapidly evolving, with increasing demand for efficient and transparent services. Navigating the Digital Garage revolutionizes the relationship between vehicle owners and service providers by offering a user-friendly platform for booking appointments at registered automobile workshops, This innovative service simplifies the car repair process, allowing users to search for nearby workshops, view their services, check availability, and book appointments seamlessly. By enhancing accessibility and communication, Navigating the Digital Garage aims to redefine how consumers engage with auto service providers, making car maintenance convenient and hassle-free.',
      challenges: 'Challenges included user engagement and integrating various service providers into the platform.',
      technologies: 'Figma for prototyping, Javascript, php, HTML, CSS, and mySQL.',
      outcome: 'Successfully created a platform that improved communication between vehicle owners and service providers, leading to a more streamlined repair process.',
      projectDate: 'January 2024',
      imageUrl: '/prototypeproject.png/',
    },
    {
      projectName: 'Baranggay Management System',
      description: 'The Barangay Management System is an integrated platform designed to streamline the administration of barangay services. It features comprehensive population records, ensuring that each resident has a detailed profile, along with efficient management of blotter records. The system also includes tools for tracking the barangays annual budget and finances. Additionally, it offers secure registration and login functionality for both administrators and residents, facilitating smooth interactions and efficient governance within the community.',
      challenges: 'Challenges include ensuring data accuracy, user adoption, and maintaining system security.',
      technologies: 'HTML, Node.js, CSS, and mySQL.',
      outcome: 'The system enhances efficiency in barangay administration, improves record-keeping, and promotes transparency in budget management.',
      projectDate: 'september 2023',
      imageUrl: '/bms.png',
    },
    {
      projectName: 'To do List application',
      description: 'The To Do List Application helps users manage their tasks effectively. It features a user-friendly interface for adding, editing, and deleting tasks, ensuring users can prioritize and track their daily activities efficiently.',
      challenges: 'Challenges faced during development included managing state effectively and ensuring a smooth user experience across different devices.',
      technologies: 'Java, XML, SQLite, and Android Studio for development.',
      outcome: 'The application enhances productivity by allowing users to organize their tasks easily and stay focused on their priorities.',
      projectDate: 'March 2024',
      imageUrl: '/todolistapp.png',
    },
    {
      projectName: 'Metamask web wallet',
      description: 'The MetaMask Web Wallet is a browser extension that allows users to manage their cryptocurrency assets seamlessly. It provides functionalities for sending and receiving tokens, viewing transaction history, and connecting to decentralized applications (dApps), enhancing the user experience in the cryptocurrency ecosystem.',
      challenges: 'Challenges include ensuring security against phishing attacks, managing private keys securely, and providing a seamless user experience when connecting to various dApps.',
      technologies: 'JavaScript, HTML and CSS for the user interface.',
      outcome: 'The wallet offers a secure and user-friendly interface for managing digital assets, promoting greater adoption of cryptocurrencies and decentralized applications.',
      projectDate: 'May 2024',
      imageUrl: '/metamaskwallet.png',
    },
    {
      projectName: 'Basic calculator app for anroid',
      description: 'This project is a simple yet functional calculator application developed for Android devices. It allows users to perform basic arithmetic operations efficiently.',
      challenges: 'Developing a user-friendly interface and ensuring accurate calculations while handling edge cases, such as dividing by zero and managing large numbers.',
      technologies: 'Android Studio, Java/Kotlin',
      outcome: 'Successfully created a responsive calculator app that performs basic functions and provides an intuitive user experience.',
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
          {projectDescriptions.map((project, index) => ( // Using projectDescriptions array directly
            <CarouselItem key={index}>
              <div className="p-1">
                <Card
                  onClick={() => handleItemClick(index)}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <CardContent className="flex aspect-square items-center justify-center p-6 bg-gradient-to-r from-[#0b1d33] to-[#60a5fa] hover:from-[#60a5fa] hover:to-[#0e2644] transition-colors text-white rounded-lg">
                    <span className="text-4xl font-semibold">{project.projectName}</span> {/* Displaying the project name */}
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
