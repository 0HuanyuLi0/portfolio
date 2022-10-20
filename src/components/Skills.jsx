import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
const Skills = () => {
    return (
        <div name='skills' className='pt-[80px] w-full grid place-items-center min-h-screen dark:bg-slate-800 dark:text-slate-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='text-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>
                    <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6 pt-6'>
                        <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/html.png'} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                        <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/css.png'} alt="HTML icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                        <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/javascript.png'} alt="HTML icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                        <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/react.png'} alt="HTML icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                        <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/vue.png'} alt="HTML icon" />
                        <p className='my-4'>VUE JS</p>
                    </div>
                    <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                        <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/ruby.png'} alt="HTML icon" />
                        <p className='my-4'>RUBY ON RAILS</p>
                    </div>
                    <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                        <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/node.png'} alt="HTML icon" />
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                        <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/jquery.png'} alt="HTML icon" />
                        <p className='my-4'>JQUERY</p>
                    </div>
                    <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                        <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/bootstrap.png'} alt="HTML icon" />
                        <p className='my-4'>BOOTSTRAP</p>
                    </div>
                    <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                        <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/mui.png'} alt="HTML icon" />
                        <p className='my-4'>MATERIAL UI</p>
                    </div>


                    <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                        <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/mongo.png'} alt="HTML icon" />
                        <p className='my-4'>MONGO DB</p>
                    </div>
                    <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                        <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/sql.png'} alt="HTML icon" />
                        <p className='my-4'>POSTGRESQL</p>
                    </div>
                    <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                        <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/tailwind.png'} alt="HTML icon" />
                        <p className='my-4'>TAILWIND</p>
                    </div>
                    <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                        <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/python.png'} alt="HTML icon" />
                        <p className='my-4'>PYTHON</p>
                    </div>
                    <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                        <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/c.png'} alt="HTML icon" />
                        <p className='my-4'>C</p>
                    </div>
                    <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                        <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/github.png'} alt="HTML icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                        <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/ibm.png'} alt="HTML icon" />
                        <p className='my-4'>IBM CLOUD</p>
                    </div>
                    <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                        <img className='w-20 mx-auto' src={process.env.PUBLIC_URL + '/aws.png'} alt="HTML icon" />
                        <p className='my-4'>AWS CLOUD</p>
                    </div>
                </div>
            </div>
            <Link to='projects' smooth={true} duration={500} className='mx-auto group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 w-fit cursor-pointer dark:hover:border-pink-600 border-slate-800 dark:border-slate-300'>
                View Projects
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3 ' />
                </span>
            </Link>
        </div>
    );
};

export default Skills;