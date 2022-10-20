import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { MdLightMode, MdDarkMode } from 'react-icons/md'


const Navbar = (props) => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const changeMode = () => props.mode();

    return (

        <div className={'fixed w-full h-[80px] flex justify-between items-center px-4 dark:bg-slate-800 dark:text-slate-300'}>
            <div className={nav ? 'invisible' : 'font-bold text-xl flex items-center gap-3'}>
                <Link to='home' smooth={true} duration={500} className='cursor-pointer'>
                    HUANYU LI
                </Link>
                {
                    props.currentMode ?
                        <div className='flex gap-3 cursor-pointer' onClick={changeMode}>
                            <MdDarkMode />
                            <span className='text-sm font-normal'>Dark Mode</span>
                        </div>
                        :
                        <div className='flex gap-3 cursor-pointer' onClick={changeMode}>
                            <MdLightMode />
                            <span className='text-sm font-normal'>Light Mode</span>
                        </div>
                }

            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-slate-300 dark:bg-slate-800 dark:text-slate-300'
                }
            >
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>

                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/huanyuli/'
                            target="_blank"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-900'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/0HuanyuLi0'
                            target="_blank"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
                        <Link
                            className='flex justify-between items-center w-full text-gray-300'
                            to='contact' smooth={true} duration={500}
                        >
                            Email <HiOutlineMail size={30} />
                        </Link>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-lime-700'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://drive.google.com/file/d/1HMz_8a0goYKF24oSmG0lIpychbyhCPdf/view?usp=sharing'
                            target="_blank"
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>




    );
};

export default Navbar;