'use client'
import React from 'react';
import Image from 'next/image';
import Morgan from '@/assets/morgan.jpeg';
import Navbar from '@/components/atoms/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-primary-dark text-primary-light">
      <Navbar />
      <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <Image src={Morgan} alt="Myself image" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg mb-4 text-dark-gray">
              Hi! I'm Morgan, a passionate web developer with a knack for creating beautiful and functional websites. I have a strong background in design and a keen eye for detail. My goal is to deliver the best user experience possible.
            </p>
            <p className="text-lg mb-4 text-dark-gray">
              In my spare time, I enjoy learning new technologies and working on personal projects. I'm always excited to take on new challenges and expand my skill set.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
