import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import myImage from '../assets/aanand.jpg';
import whiteImage from '../assets/aanand.jpg';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import myCv from '../assets/CA4Final.pdf';

const Home = ({ theme }) => {
  
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);
  const [typing, setTyping] = useState(true);
  const navigate = useNavigate();

  const roles = ["FrontEnd Developer", "Data Analyst","Android Devloper"];
  const speed = 100;
  const roleChangeInterval = 6000;

  useEffect(() => {
    if (typing) {
      if (index < roles[currentRole].length) {
        const timer = setTimeout(() => {
          setDisplayText((prev) => prev + roles[currentRole][index]);
          setIndex(index + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else {
        const resetTimer = setTimeout(() => {
          setTyping(false);
          setIndex(0);
        }, speed * 5);
        return () => clearTimeout(resetTimer);
      }
    } else {
      const resetTimer = setTimeout(() => {
        setDisplayText('');
        setTyping(true);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, speed);
      return () => clearTimeout(resetTimer);
    }
  }, [index, typing, currentRole]);

  useEffect(() => {
    const roleChangeTimer = setInterval(() => {
      if (!typing) {
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, roleChangeInterval);
    return () => clearInterval(roleChangeTimer);
  }, [roles.length, typing]);

  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center text-black dark:text-white justify-center md:flex-row ' id='home'>
      <div className="md:w-[60%] z-40 relative flex flex-col justify-center">
        <div className='flex flex-col gap-5'>
          <h1 className='text-3xl md:text-4xl font-bold'>Hi, I'm Aanand Sah</h1>
          <h2 className='text-2xl font-bold text-[#01a2e6]'>  _{displayText}</h2>
          <p className='text-sm md:text-lg font-serif'>Dedicated Data Analytics student at Lovely Professional University with hands-on experience in data analysis and frontend development. Proficient in Python, R, SQL, Tableau, and Excel for data-driven insights, and skilled in HTML, CSS, JavaScript, and React.js for building user-friendly interfaces.while also exploring real-world data analytics projects focused on actionable insights and business impact.</p>
        </div>
        <div className='mt-5 flex gap-5 btn-cont items-center'>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={0}
            duration={500}
            className="hover:text-[#01a2e6] transition-all duration-200 cursor-pointer active:text-[#01a2e6] md:block"
          >
            <Button variant='dark' className='btn'>Hire me</Button>
          </ScrollLink>
          <div className='btn-cont'>
            <a href={myCv} download="Aanand_CV.pdf">
              <Button variant='blue' className='my-4 btn shadow-lg'>Download CV</Button>
            </a>
          </div>
        </div>
        <div className='w-full h-20 text-3xl mt-5 text-[#01a2e6] items-center flex gap-5'>
          <Link to='https://www.instagram.com/aanandshah000/saved/' target='__blank'> <FaInstagram className='hover:text-[#081b29] dark:hover:text-white transition-all duration-300 scale-105' /></Link>
          <Link to='https://github.com/Aanandbikramsah/CAU_Creation-shoes-website' target='__blank'><FaGithub className='hover:text-[#081b29] dark:hover:text-white transition-all duration-300 scale-105' /></Link>
          <Link to='https://www.linkedin.com/in/aanand-shah-451776302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='__blank'><FaLinkedin className='dark:hover:text-white hover:text-[#081b29] transition-all duration-300 scale-105' /></Link>
        </div>
      </div>
      <div className="md:w-[40%] w-full hidden md:block">
        <img
          src={theme === "dark" ? myImage : myImage}
          alt="Aanand Sah"
          className='bg-opacity-0 absolute md:relative z-30 h-1/3 rounded-b-full w-full md:scale-150 lg:scale-125'
        />
      </div>
    </div>
  );
};

export default Home;
