import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 '>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 '>
        <div className='col-span-2'>
          <p className='uppercase text-xl font-bold tracking-widest text-[#4db9e3]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I specialize in building web and mobile tablet responsive modern
            web applications that connect with API’s and other backend technologies.
            I’m passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I also have proficient
            knowledge on  UI/UX Designing i do alot web designing but developing is more 
            fun in building full stack web applications using HTML, CSS, Javascript, and
            React JS , TailwindCSS , Next JS , MongoDB ,Nodejs , Express JS etc...
            I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2 text-gray-600'>
          It's incredible  journey ! When I began my web development journey in 2021 
          while managing my graduation studies, 
          I felt completely lost initially. 
          I still remember the shock of not knowing how to center a div when I started out! 
          However, as my second year rolled around, things began to click.
          I dedicated time to learning the ropes of web development, starting with basic HTML
          and gradually progressing to more advanced frameworks like NextJS.
          It's been quite a ride since then – I've proudly crafted over 30 projects from scratch,
          each adding to my experience and expertise.During my spare moments,
          I immerse myself in extensive online research, 
          exploring upcoming and cutting-edge technologies in the market. 
          Additionally, I used to run a YouTube channel where I'd showcase my 
          editing skills and share various interests and discoveries.
          My passion for work knows no bounds-
          I love diving into projects with enthusiasm and a drive to create something exceptional.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
