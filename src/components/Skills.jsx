import React from 'react';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen dark:bg-slate-800 dark:text-slate-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6 pt-6'>
                  <img className='w-20 mx-auto' src='/html.png' alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                  <img className='w-20 mx-auto' src='/css.png' alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                  <img className='w-20 mx-auto' src='/javascript.png' alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                  <img className='w-20 mx-auto' src='/react.png' alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                  <img className='w-20 mx-auto' src='vue.png' alt="HTML icon" />
                  <p className='my-4'>VUE JS</p>
              </div>
              <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                  <img className='w-20 mx-auto' src='ruby.png' alt="HTML icon" />
                  <p className='my-4'>RUBY ON RAILS</p>
              </div>
              <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                  <img className='w-20 mx-auto' src='/node.png' alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                  <img className='w-20 mx-auto' src='jquery.png' alt="HTML icon" />
                  <p className='my-4'>JQUERY</p>
              </div>
              <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                  <img className='w-20 mx-auto' src='bootstrap.png' alt="HTML icon" />
                  <p className='my-4'>BOOTSTRAP</p>
              </div>
              <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                  <img className='w-20 mx-auto' src='mui.png' alt="HTML icon" />
                  <p className='my-4'>MATERIAL UI</p>
              </div>
              
              
              <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                  <img className='w-20 mx-auto' src='/mongo.png' alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                  <img className='w-20 mx-auto' src='/sql.png' alt="HTML icon" />
                  <p className='my-4'>POSTGRESQL</p>
              </div>
              <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                  <img className='w-20 mx-auto' src='tailwind.png' alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                  <img className='w-20 mx-auto' src='python.png' alt="HTML icon" />
                  <p className='my-4'>PYTHON</p>
              </div>
              <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                  <img className='w-20 mx-auto' src='c.png' alt="HTML icon" />
                  <p className='my-4'>C</p>
              </div>
              <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                  <img className='w-20 mx-auto' src='/github.png' alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                  <img className='w-20 mx-auto' src='/ibm.png' alt="HTML icon" />
                  <p className='my-4'>IBM CLOUD</p>
              </div>
              <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-6'>
                  <img className='w-20 mx-auto' src='/aws.png' alt="HTML icon" />
                  <p className='my-4'>AWS CLOUD</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;