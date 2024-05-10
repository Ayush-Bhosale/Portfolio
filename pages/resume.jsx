import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Ayush | Resume</title>
        <meta
          name='description'
          content='I’m a web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Ayush Bhosale</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/ayush-bhosale-b56546250/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Ayush-Bhosale'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
            <span className='px-1'></span> Web Designing |
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}

              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p>Web Designing</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Frontend Technologies</span>
            <span className='font-bold'></span>
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React JS
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Bootstrap
            <span className='px-2'>|</span>Sass
            <span className='px-2'>|</span>Clerk
            <span className='px-2'>|</span>Tailwind CSS
          </p>
          <p className='py-2'>
            <span className='font-bold'>Backend Technologies</span>
            <span className='font-bold'></span>
            <span className='px-2'>|</span>Node Js
            <span className='px-2'>|</span>Express Js
            <span className='px-2'>|</span>Mongo DB
            <span className='px-2'>|</span>Mongoose
            <span className='px-2'>|</span>OAuth
            <span className='px-2'>|</span>REST API
            <span className='px-2'>|</span>Firebase
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>MySQL
          </p>

          <p className='py-2'>
            <span className='font-bold'>Web Designing</span>
            <span className='font-bold'></span>
            <span className='px-2'>|</span>Figma
            <span className='px-2'>|</span>Canva
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Fresher
            </span>
          </p>
          <p className='py-1 italic'> Web Developer & Web Master (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Currently Worked with Bluespace Org 3 friends team collbrated to work as freelancer Frontend
               directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Acedamic Projects
            </span>
            <span className='px-2'>(Ayush | 2021-current*)</span>
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
          <li>  Flexagram : Freelancing And Relevel Social media Project 
            So basically Flexagram is my final year project which is combination
            of Freelaning + Relevel Platform Freelancing Platform is currently hosted 
            but relevel is on localhost.I built this application in Next JS and is hosted on Vercel.
            This app features user authentication with OTP & Gmail Verification
            platform allows users to create profiles, upload their work, 
            manage transactions, and potentially participate in Relevel quiz app. 
            our aim was to attract big players to our platform just like instagram, x, facebook, etc. 
        </li>
        <li>  Freelance Project 
             BlueSpace Org for IT Projects Development
             Collaborated with a team of 3 friends
             October 2023 - December 2023 
             Designed and developed an organizational website using the MERN stack
             Implemented responsive design principles for optimal user experience
             Utilized MongoDB, Express.js, React, and Node.js for seamless functionality
             Conducted regular meetings with peer members, assigned tasks, and ensured project milestones!
        </li>
        <li>
Projects 
Promtopia Fullstack Application :
- Developed a full-stack application using the MERN stack for a promotional platform.
</li>
<li>AnimeHub Next.js Frontend :
- Created the FrontEnd using Next.js for an anime streaming platform, focusing on speed and interactivity with frame motion smooth scroll.
</li>
<li>
ModernBankPayment  Frontend :
- Designed and developed the front-end interface for a payment application, emphasizing user-friendly design and secure transactional flows.
</li>
<li>
E-commerce  Frontend :
- Contributed to the front-end development of an e-commerce platform, emphasizing UI/UX enhancements and product display features.
</li>
<li>
UI Designs :
-Nike landing page UI
-Shoes landing page UI 
</li>
          
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other  Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Extracurricular Activities </span>
            <span className='px-2'></span>
          </p>
          <p className='py-1 italic'> CoduxAyush/ Ayush </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            
            Volunteer Work :-
            IT Fest Project Coordinator -
            magazine work during college fest 2022-23 contributed to editing and content creation for the college 
            magazine during the fest college IT fest designing and editing role 
            played a key role in designing and editing materials 
            for the college IT fest science club chatGPT session newsletter
             contributed to creating and editing 
            newsletters for the science club ChatGPT sessions
            </li>

            <li>Science Exhibtion Chatgpt Banner</li>
            <li>ChatGPT Session Newsletter</li>
            <li>IT Fest Chm Banner</li>
            <li>Chandiutsav College fest Magazine</li>
          </ul>
        </div>

        {/* Quality */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Qualities</span>
            <span className='px-2'></span>
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Quick Learner</li>
            <li>Good Listener</li>
            <li>Consistent</li>
            <li>Punctual</li>
          </ul>
        </div>

        {/* Hobbies */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Hobbies</span>
            <span className='px-2'></span>
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Sports</li>
            <li>Perfectioning Things</li>
            <li>Editing & Animation stuff</li>
            <li>Music</li>
          </ul>
        </div>

      </div>
    </>
  );
};

export default resume;
