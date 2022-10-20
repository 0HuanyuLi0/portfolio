import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import {
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';



const Home = () => {
    return (
        <div name='home' className='w-full h-screen dark:bg-slate-800 dark:text-slate-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold '>
                    HUANYU LI
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold '>
                    I'm a Software Engineer.
                </h2>
                <p className='py-4 max-w-[700px]'>
                    I am a software engineer with an extensive background in electrical engineering. I believe technology is the future and it will make people work easier and play harder. As someone who is passionate about coding, I would like to be a contributor to the new world.
                </p>
                <div>
                    <Link to='projects' smooth={true} duration={500} className='group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 w-fit'>
                        View Projects
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </Link>
                </div>
                <div className='flex gap-5 mt-3'>
                    <a href='https://www.linkedin.com/in/huanyuli/' target="_blank">
                        <FaLinkedin size={30} />
                    </a>
                    <a href='https://github.com/0HuanyuLi0' target="_blank">
                        <FaGithub size={30} />
                    </a>
                    <Link to='contact' smooth={true} duration={500} className="cursor-pointer">
                        <HiOutlineMail size={30} />
                    </Link>
                    <a href='https://drive.google.com/file/d/1HMz_8a0goYKF24oSmG0lIpychbyhCPdf/view?usp=sharing' target="_blank">
                      <BsFillPersonLinesFill size={30} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;