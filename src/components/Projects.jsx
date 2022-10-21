import React from 'react';
import { data } from "../data/data.js";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Projects = () => {

    // projectss file
    const projects = data;
    //setProjects(data);

    return (
        <div name='projects' className='pt-[80px] w-full grid place-items-center min-h-screen  dark:bg-slate-800 dark:text-slate-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 text-center'>
                    <p className='text-4xl font-bold inline border-b-4  border-pink-600'>
                        Projects
                    </p>
                    <p className='py-6'>// Check out some of my recent Projects</p>
                </div>

                {/* container for projectss */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 ">

                    {/* Gird Item */}
                    {projects.map((item, index) => (
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/${item.image})`, backgroundSize: `cover` }}

                            className="shadow-lg shadow-slate-800 group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div"
                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100">
                                <p className="text-2xl font bold  tracking-wider text-slate-300">
                                    {item.name}
                                </p>

                                <p className="text-xl font bold  tracking-wider text-slate-300 mt-4 px-4">
                                    {item.description && item.description}
                                </p>
                                <div className="pt-8 text-center ">
                         
                                    <a href={item.github} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                        font-bold text-lg text-slate-300 hover:bg-pink-600"
                                        >
                                            Code
                                        </button>
                                    </a>
                              
                                    <a href={item.live} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                        font-bold text-lg text-slate-300 hover:bg-pink-600"
                                        >
                                            Demo
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>

            <Link to='contact' smooth={true} duration={500} className='mx-auto group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 w-fit cursor-pointer mt-6 dark:hover:border-pink-600 border-slate-800 dark:border-slate-300'>
                Contact Me
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3 ' />
                </span>
            </Link>
        </div>
    );
};

export default Projects;