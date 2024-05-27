import React from 'react'
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/vineetProfile.jpg';
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
})

const Hero = () => { 
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='p-0 lg:pl-28 lg:pr-0 sm:px-10'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1
                    variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-gray-900 dark:text-white">
                            Vineet Maurya
                    </motion.h1>
                     <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className='bg-gradient-to-r from-indigo-800 via-blue-400 to-pink-600 bg-clip-text text-3xl portfolio
                        xl tracking-tight text-transparent dark:bg-gradient-to-r dark:from-pink-400 dark:via-slate-300 dark:to-purple-500 dark:bg-clip-text dark:text-3xl dark:portfolio
                        xl dark:tracking-tight dark:text-transparent'>
                            Full Stack Developer 
                     </motion.span>
                     <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible" 
                        className='my-2 max-w-xl py-6 font-light tracking-tighter text-slate-800 dark:text-white'>
                            {HERO_CONTENT}
                    </motion.p>
                </div>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img 
                        initial={{ x: 100, opacity: 0}}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2}}
                        className='rounded-full size-96'
                        src={profilePic} alt='Vineet Maurya' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero; 