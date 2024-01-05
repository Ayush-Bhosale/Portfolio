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
i specialize in building web and mobile tablet responsive modern web applications that connect with api’s and other backend technologies.
i’m passionate about learning new technologies and understand there is more than one way to accomplish a task. though i also have proficient knowledge on  ui/ux designing i do alot web designing but developing is more fun in building full stack web applications using html, css, javascript, and react js , tailwindcss , next js , mongodb ,nodejs , express js etc...
i am a quick learner and can pick up new tech stacks as needed. i believe that being a great developer is not using one specific language, but choosing the best tool for the job.
it is an incredible journey ! when i began my web development journey in 2021 while managing my graduation studies, 
i felt completely lost initially. 
i still remember the shock of not knowing how to center a div when i started out! 
however, as my second year rolled around, things began to click.
i dedicated time to learning the ropes of web development, starting with basic html
and gradually progressing to more advanced frameworks like nextjs.
basically quite a ride since then  i have proudly crafted over 30 projects from scratch,
each adding to my experience and expertise.during my spare moments,
i immerse myself in extensive online research, 
exploring upcoming and cutting-edge technologies in the market. 
additionally, i used to run a youtube channel where i do showcase my 
editing skills and share various interests and discoveries.
my passion for work knows no bounds-
i love diving into projects with enthusiasm and a drive to create something exceptional."
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
