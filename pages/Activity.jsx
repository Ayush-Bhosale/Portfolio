import Image from 'next/image';
import React from 'react';
import ActivityImg from '../public/assets/projects/Activites.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Activity = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={ActivityImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        <h2>Extracurricular Activites</h2>
          <h3>  Editing / Newsletter / Flyers / Videos / PPT'S </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          Since childhood, 
          my passion for creativity has been an integral part of who I am.
           This drive led me to embark on a short but impactful career on YouTube, 
           where I showcased my edited video works and dedicatedly crafted eye-catching thumbnails. 
           As I transitioned into college, I eagerly joined the official teams,
            lending my creative touch to various projects such as banners, flyers, and presentations. 
            My journey from YouTube to college has been fueled by a relentless pursuit of innovation 
            and artistic expression, shaping my path towards a future where creativity knows no bounds.
          </p>
          <a
            href='https://drive.google.com/drive/folders/16xf1EZ5PNR1hfpYd6l_KMmbJx9EOqvt2?usp=drive_link'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Overview</button>
          </a>
         
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Creativity</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Canva  &amp;  Figma
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Capcut  &amp;  Flimora
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Edits
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Flyers &amp; Banners
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Magazines
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Activity;

