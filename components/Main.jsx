import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m Ayush<span className='text-[#4db9e3]'> 
            <Typewriter 
            options={{
            strings: ['Web Developer', 'Web Designer' , 'Editor' , 'Full-Stack Developer'],
            autoStart: true,
            loop: true,
            deleteSpeed:0.100,
            }}
            />
            </span>
          </h1>
          <p className='py-6 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive modern web applications
            with integrating Both Front & Back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/ayush-bhosale-b56546250/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='text-[#4db9e3] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/Ayush-Bhosale'
              target='_blank'
              rel='noreferrer'
            >
              <div className='text-[#4db9e3] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='text-[#4db9e3] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='text-[#4db9e3] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
