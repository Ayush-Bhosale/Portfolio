import Image from 'next/image';
import React from 'react';
import PromptImg from "../public/assets/projects/Promptopia.png";
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const promtopia = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={PromptImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Promtopia Fullstack Application </h2>
          <h3>Next JS / Node JS / Express JS / Tailwind CSS / MongoDB / OAuth </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          <p>
  This application was built using NEXT.JS and is styled with
  Tailwind CSS. The application is hosted statically using Vercel.
  This application supports user authentication
  using OAuth. Users are able to create a new account using their
  email address through a Google account and can then sign in 
  to create, search, and delete CRUD operations.
  This is made possible by creating an OAuth Google Cloud Storage
  MongoDB database at the time of user registration. 
  This is mobile responsive and has a lot of features from
  Next/Auth.js for authentication. Users may choose to be
  authenticated with a Google account with the help of OAuth
  built-in routing and Next/Auth Context.
</p>

          </p>
          <a
            href='https://github.com/Ayush-Bhosale/Next13-Promptopia'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://promtopia-five.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDb
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OAuth
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

export default promtopia;