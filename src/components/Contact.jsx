import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='pt-[80px] w-full grid place-items-center min-h-screen  flex justify-center items-center p-4 dark:bg-slate-800 dark:text-slate-300'>
        <form method='POST' action="https://getform.io/f/452a53b7-386d-4303-b739-897ce6d94a5f" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Contact</p>
                <p className=' py-4'>// Submit the form below or shoot me an email - <a href="mailto:huanyu_li@outlook.com">huanyu_li@outlook.com</a></p>
            </div>
            <input className='p-2 text-slate-800' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 text-slate-800' type="email" placeholder='Email' name='email' />
            <textarea className='text-slate-800 p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact