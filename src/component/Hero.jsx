import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="relative bg-cover md:w-screen pb-15 bg-center bg-[url('/assets/dark-grad.jpg')] ">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.75)] "></div>
      <div className="relative container mx-auto ">
        <Navbar />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className='mx-auto w-fit relative mt-10 mb-20'
        >
          <img src="/assets/drone.png" alt="" className='md:h-[50vh] h-[30vh]' />
        </motion.div>


        <div className='mx-auto text-center'>
          <motion.h1
            className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-zinc-100 font-bold mb-7'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            AI Powered UAV for Search & Rescue
          </motion.h1>

          <motion.h3
            className='text-zinc-100 uppercase md:text-xl text-sm'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            FYP BATCH 2021 | electronics | NEd Electronics
          </motion.h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
