"use client"

import React from 'react';
import dynamic from 'next/dynamic';
import { MoonLoader } from 'react-spinners';
import { motion } from 'framer-motion';
import { useTranslation } from "next-i18next";
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const CalendlyCalendar = dynamic(() => import('../molecules/CalendlyCalendar'), { ssr: false });

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="md:container items-center mx-auto py-10" id='contact'>
      <motion.h1 className="text-4xl font-medium text-primary-light text-center"
        dangerouslySetInnerHTML={{ __html: t("contact.title") }}></motion.h1>
      <div className='rounded-md flex flex-col sm:justify-between sm:flex-row min-h-[80vh] my-6'>
        <div className='bg-black w-full rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none relative min-h-[80vh] sm:min-h-0'>
          <div className="absolute w-full h-full flex flex-col items-center justify-center">
            <MoonLoader
              color={'white'}
              size={20}
              aria-label="Loading Spinner"
            />
            Chargement du calendrier...
          </div>
          <CalendlyCalendar />
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center text-lg text-primary-light">
          <FaPhone className="mr-2" /> 
          <a href="tel:+88698375971222" className="hover:underline">+886 (0)9 837 597 1222</a>
        </div>
        <div className="flex items-center text-lg text-primary-light">
          <FaEnvelope className="mr-2" />
          <a href="mailto:info@fabiengiraudier.com" className="hover:underline">info@fabiengiraudier.com</a>
        </div>
      </div>
    </div>
  )
}

export default Contact;
