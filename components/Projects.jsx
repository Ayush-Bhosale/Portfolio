import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PromptImg from "../public/assets/projects/Promptopia.png";
import AnimeImg from "../public/assets/projects/Animeverse.png";
import BankImg from "../public/assets/projects/Modernpayment.png";
import ShopImg from "../public/assets/projects/Ecommerce.png";
import ProjectItem from './ProjectItem';
import ShoeUiImg from "../public/assets/projects/Shoe.png";
import GameUiImg from "../public/assets/projects/Console.png";
import FlexagramImg from "../public/assets/projects/Home.png";
import ActivityImg from "../public/assets/projects/Activites.png";

const Projects = () => {
  return(
    <div id="projects" className='w-full mt-10 '>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase font-bold text-[#4db9e3]'>
          Projects
        </p>
        <h2 className='py-4'>What I Have Bulit</h2>
        <div className='grid md:grid-cols-2 gap-8'>

        
        <ProjectItem 
        title="Flexagram"
        backgroundImg={FlexagramImg} 
        projectUrl='/flexagram'
        tech="Next JS" 
        />

       <ProjectItem 
        title="Promotpia"
        backgroundImg={PromptImg} 
        projectUrl='/promtopia' 
        tech="Next JS"
        />

        <ProjectItem 
        title=" AnimeHubb"
        backgroundImg={AnimeImg} 
        projectUrl='/anime' 
        tech="Next JS"
        />

        <ProjectItem 
        title="Modern Bank Payment"
        backgroundImg={BankImg} 
        projectUrl='/payment'
        tech=" React JS" 
        />

        <ProjectItem 
        title="Clothing E-commerce"
        backgroundImg={ShopImg} 
        projectUrl='/shop' 
        tech="React JS"
        />

        <ProjectItem 
        title ="Shoes Ui"
        backgroundImg={ShoeUiImg} 
        projectUrl='/shoes' 
        tech ="User Interface"
        />

       <ProjectItem 
        title ="Gaming Ui"
        backgroundImg={GameUiImg} 
        projectUrl='/gaming'
        tech ="User Interface"
        />

       <ProjectItem 
        title ="Extracurricular Activites"
        backgroundImg={ActivityImg} 
        projectUrl='/Activity'
        tech ="Other Activites"
        />

        </div>
      </div>
    </div>
  );
};

export default Projects