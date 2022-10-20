import React from 'react';


const About = () => {
    return (
        <div name='about' className='w-full h-screen dark:bg-slate-800 dark:text-slate-300'>

            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>

                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>

                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Huanyu Li, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                            I am passionate about coding that improves the quality of life. I'm a fast learner, like challenges, and am good at solving problems, and as such, I believe that software engineering as a career is a natural fit for me. If you are keen to work together, please reach out!
                        </p>
                    </div>
                </div>
                <div className='text-center'>
                    <img src='/hello.png' alt="hello" />
                </div>
            </div>
        </div>
    );
};

export default About;