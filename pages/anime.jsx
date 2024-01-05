"use client"
import Image from 'next/image';
import React from 'react';
import  AnimeImg from "../public/assets/projects/Animeverse.png";
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const anime = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={AnimeImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>AnimeVerse </h2>
          <h3> Next JS / Tailwind / Frame Motion / Infinty Smooth Scroll </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          I developed an application using Next.js, and it's currently hosted on both GitHub Pages and Vercel. This app serves up comprehensive details about different anime, including their IMDb ratings and the specific episodes or seasons they encompass. To enrich its functionality, I integrated it with the Shikimori API.

One of the key features that set this app apart is its utilization of Frame Motion. This technology plays a pivotal role in rendering the content server-side, enabling smooth animations and buffering to ensure seamless scrolling. The use of Frame Motion has significantly enhanced the app's performance, eliminating any potential lags or disruptions in the user experience.
          </p>
          <a
            href='https://github.com/Ayush-Bhosale/AnimeHubbb'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://animehub-wine.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Frame Motion
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Infinte & Seamless scrolling
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> IMDB ANIME
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

export default anime;
