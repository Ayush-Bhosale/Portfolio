import Image from 'next/image';
import React from 'react';
import GameUiImg from "../public/assets/projects/Console.png";

const game = () => {
  return (
 <div>
       <div className='w-full flex justify-center items-center h-screen'>
      <div className='max-w-full md:max-w-screen-md'></div>
        <Image
          className='w-full h-auto'
          src={GameUiImg}
          alt='Game UI Image'
        />
      </div>

      
    </div>
  );
};

export default game;
