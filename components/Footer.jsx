import React from 'react'
import Icons from './Icons'
import {
    AiFillAppstore,
    AiFillGithub,
    AiFillFacebook,
    AiFillInstagram,
  } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='bg-slate-800'>
        <div className='text-5xl flex justify-center gap-16 py-4'>
            <AiFillFacebook className='text-white text-4xl my-5 rounded-full'/>
            <AiFillInstagram className='text-white text-4xl my-5 rounded-full'/>
            <AiFillGithub className='text-white text-4xl my-5 rounded-full'/>
            <AiFillAppstore className='text-white text-4xl my-5 rounded-full'/>
        </div>

        <div className='text-center py-4 m-8'>
            <h1 className='font-burtons text-white text-4xl'>Interested to work with me? Drop me a line</h1>
            <h3 className='font-sans text-orange-300 text-xl pt-2'>carreon.johnloi@gmail.com</h3>
        </div>

        <div className='bg-slate-900 flex justify-between p-2.5 mt-8'>
            <h3 className='pl-8 text-white'>Copyright @2024 John Loi Carreon</h3>
            <ul className='flex gap-7 pr-8'>
                <li><a className='text-white' href="">Home</a></li>
                <li><a className='text-white' href="">About</a></li>
                <li><a className='text-white' href="">Contact Me</a></li>
                <li><a className='text-white' href="">Blog</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer