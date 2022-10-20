import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
const About = () => {
    return (
        <div name='about' className='w-full grid place-items-center min-h-screen dark:bg-slate-800 dark:text-slate-300'>
            <div>
                <div className='text-center mb-6'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>


                <div className='flex flex-col justify-center items-center w-full h-full'>

                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='text-center md:text-left text-4xl font-bold'>
                            <p>Hi. I'm Huanyu Li, nice to meet you. Please take a look around.</p>
                        </div>
                        <div className='text-center md:text-left'>
                            <p>
                                I am passionate about coding that improves the quality of life. I'm a fast learner, like challenges, and am good at solving problems, and as such, I believe that software engineering as a career is a natural fit for me. If you are keen to work together, please reach out!
                            </p>
                        </div>
                    </div>

                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/hello.png'} alt="hello" className='block mx-auto' />
                </div>

                <Link to='skills' smooth={true} duration={500} className='mx-auto mt-6 group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 w-fit cursor-pointer'>
                    View Skills
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3 ' />
                    </span>
                </Link>
            </div>

        </div>
    );
};

export default About;