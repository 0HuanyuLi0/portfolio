import React from 'react';
import { data } from "../data/data.js";


const Projects = () => {

    // projectss file
    const projects = data;
    //setProjects(data);

    return (
        <div name='projects' className='w-full h-screen dark:bg-slate-800 dark:text-slate-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
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
                            style={{ backgroundImage: `url(${item.image})`, backgroundSize: `cover` }}

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
                        font-bold text-lg text-slate-300 hover:bg-slate-800"
                                        >
                                            Code
                                        </button>
                                    </a>
                              
                                    <a href={item.live} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                        font-bold text-lg text-slate-300 hover:bg-slate-800"
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
        </div>
    );
};

export default Projects;