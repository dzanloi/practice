"use client";
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';

import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';  
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Icons from '@/components/Icons';
import Heading from '@/components/Heading';
import Profile from '@/components/Profile';
import Footer from '@/components/Footer';
import Cards from '@/components/Cards';


export default function Home() {
  const cardData = [
    {
      imageSrc: design,
      title: "Responsive Beautiful Designs",
      description: "Create visually appealing and responsive websites that look great on all devices (desktop, tablet, mobile). Ensure cross-browser compatibility and performance optimization.",
      tools: ["Photoshop", "Figma", "Illustrator"]
    },
    {
      imageSrc: code,
      title: "Custom Landing Pages",
      description: "Design and develop high-converting landing pages tailored to specific marketing campaigns or product launches. Implement A/B testing to improve user engagement and conversion rates.",
      tools: ["Photoshop", "Figma", "Illustrator"]
    },
    {
      imageSrc: consulting,
      title: "Single Page Applications (SPA)",
      description: "Develop interactive and dynamic single-page applications using modern frontend frameworks such as React.js. Ensure fast loading times and seamless user experience.",
      tools: ["Photoshop", "Figma", "Illustrator"]
    }
  ];

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
        <section className="min-h-screen">
          {/* NAVIGAGION BAR */}
          <Navigation/>

          {/* TEXT */}
          <Heading/>

          {/* ICONS */}
          <Icons/>

          <Profile imageSrc={deved}/>
        </section>



        <section className=''>
          {/* ABOUT */}
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md 
            py-2 
            leading-8 
            text-gray-800'
            >
              As a student and part-time frontend web developer, 
              I offer a range of web development services tailored to meet your needs. 
              I specialize in creating visually appealing and responsive websites that look great on all devices, 
              ensuring cross-browser compatibility and performance optimization. 
              Whether you need a custom landing page for a marketing campaign or product launch, 
              or an interactive single-page application (SPA) built with modern frontend frameworks like React.js, 
              I have the skills to deliver high-converting and dynamic solutions. My expertise extends to UI/UX design, 
              where I focus on crafting intuitive and user-friendly interfaces, conducting user research, 
              and performing usability testing to enhance the overall user experience.
            </p>
          </div>

          {/* CARDS */}
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={design} width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Responsive Beautiful Designs</h3>
              <p>Create visually appealing and responsive websites that look great on all devices (desktop, tablet, mobile).
              Ensure cross-browser compatibility and performance optimization.</p>

              <h4 className='py-4 text-teal-600'>Design Tools I used:</h4>
              <ul>
                <li className='text-gray-800 py-1'>Photoshop</li>
                <li className='text-gray-800 py-1'>Figma</li>
                <li className='text-gray-800 py-1'>Illustrator</li>
              </ul>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={code} width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Custom Landing Pages</h3>
              <p>Design and develop high-converting landing pages tailored to specific marketing campaigns or product launches.
              Implement A/B testing to improve user engagement and conversion rates.</p>

              <h4 className='py-4 text-teal-600'>Design Tools I used:</h4>
              <ul>
                <li className='text-gray-800 py-1'>Photoshop</li>
                <li className='text-gray-800 py-1'>Figma</li>
                <li className='text-gray-800 py-1'>Illustrator</li>
              </ul>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={consulting} width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Single Page Applications (SPA)</h3>
              <p>Develop interactive and dynamic single-page applications using modern frontend frameworks such as React.js.
              Ensure fast loading times and seamless user experience.</p>

              <h4 className='py-4 text-teal-600'>Design Tools I used:</h4>
              <ul>
                <li className='text-gray-800 py-1'>Photoshop</li>
                <li className='text-gray-800 py-1'>Figma</li>
                <li className='text-gray-800 py-1'>Illustrator</li>
              </ul>
            </div>
          </div>
        </section>



        <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md 
            py-2 
            leading-8 
            text-gray-800'
            >
              As a student and part-time frontend web developer, 
              I offer a range of web development services tailored to meet your needs. 
              I specialize in creating visually appealing and responsive websites that look great on all devices, 
              ensuring cross-browser compatibility and performance optimization. 
              Whether you need a custom landing page for a marketing campaign or product launch, 
              or an interactive single-page application (SPA) built with modern frontend frameworks like React.js, 
              I have the skills to deliver high-converting and dynamic solutions. My expertise extends to UI/UX design, 
              where I focus on crafting intuitive and user-friendly interfaces, conducting user research, 
              and performing usability testing to enhance the overall user experience.
            </p>
          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} 
              className='rounded-lg object-cover' 
              width={'100%'} 
              height={'100%'} 
              layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} 
              className='rounded-lg object-cover' 
              width={'100%'} 
              height={'100%'} 
              layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web3} 
              className='rounded-lg object-cover' 
              width={'100%'} 
              height={'100%'} 
              layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web4} 
              className='rounded-lg object-cover' 
              width={'100%'} 
              height={'100%'} 
              layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web5} 
              className='rounded-lg object-cover' 
              width={'100%'} 
              height={'100%'} 
              layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web6} 
              className='rounded-lg object-cover' 
              width={'100%'} 
              height={'100%'} 
              layout='responsive'/>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}
