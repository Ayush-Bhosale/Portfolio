import Image from 'next/image';
import React from 'react';
import ShoeUiImg from "../public/assets/projects/Shoe.png";

const shoe = () => {
  return (
 <div>
       <div className='w-full flex justify-center items-center h-screen'>
      <div className='max-w-full md:max-w-screen-md '></div>
        <Image
          className='w-full h-auto '
          src={ShoeUiImg}
          alt='Shoe UI Image'
        />
      </div>


      
    </div>
  );
};

export default shoe;