import React from 'react';
import { Button } from './ui/button';
import ProgreshBar from './ProgreshBar';
import { FaHtml5, FaCss3, FaJs } from "react-icons/fa6";
import { FaReact, FaNode } from "react-icons/fa";
import myCv from '../assets/CA4Final.pdf';

const About = () => {
  return (
    <div className='my-32 text-black dark:text-white w-full flex flex-col' id='about'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-4xl md:text-6xl font-bold'>
          ab<span className='text-[#01a2e6] underline'>O</span>ut
        </h1>
        <div className='flex rounded-md p-2 flex-col dark:rounded-none dark:p-0 md:flex-row gap-2 mt-2 shadow-2xl py-2 items-center justify-center h-full '>
          <div className='flex-1'>
            <div className='text-xs md:text-sm'>
            I am a Data Analyst currently pursuing a Bachelor's in Computer Science at Lovely Professional University (2022–2026), with a strong foundation in Python, R, SQL, Tableau, and Excel. I’ve contributed to building interactive dashboards and data-driven web interfaces by integrating APIs and visualizing dynamic datasets. I’ve also collaborated with cross-functional teams to ensure data accuracy, implemented clean and responsive designs, and maintained well-documented, version-controlled code. I'm passionate about extracting meaningful insights from data and combining analytical thinking with user-centric design to build impactful digital solutions. I continuously strive to grow through real-world projects and lifelong learning. </div>
            <div className='btn-cont'>
              <a href={myCv} download="Aanand_CV.pdf">
                <Button variant='blue' className='my-4 btn shadow-lg'>Download CV</Button>
              </a>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <ProgreshBar />
          </div>
        </div>
        <div className='flex flex-col gap-5 w-full h-full'>
          <div >
            <h2 className='text-3xl font-bold'>Skills</h2>
          </div>
          <div className='flex items-center w-full justify-between'>
            <FaHtml5 className='text-4xl md:text-5xl text-[#01a2e6]' />
            <FaCss3 className='text-4xl md:text-5xl text-[#01a2e6]' />
            <FaJs className='text-4xl md:text-5xl text-[#01a2e6]' />
            <FaReact className='text-4xl md:text-5xl text-[#01a2e6]' />
            <FaNode className='text-4xl md:text-5xl text-[#01a2e6]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
