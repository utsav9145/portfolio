import React from 'react'
import Avatars from '../assets/avatars-icon.jpg'
import { Button } from '@mui/material'
import ContactUs from './ContactUs'
import Experience from './Experience'
import Projects from './Projects'

const HomePage = () => {
    return (
        <div className='bg-[#1A202C]'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='lg:py-28 py-14 w-full flex lg:flex-nowrap flex-wrap gap-5'>
                    <div className='lg:w-1/2 w-full flex flex-col gap-3.5'>
                        <h2 className='sticky md:text-6xl text-4xl font-semibold md:leading-16 leading-8'>
                            <span className='css-s49jdg'>Welcome to my</span>
                            <br />
                            <span className='css-1a908fz'>Portfolio!</span>
                        </h2>
                        <div className='flex flex-col gap-2.5'>
                            <p className='text-white'>Hi! I'm a Frontend Developer with 1 year of hands-on experience building web applications using <mark className='css-1m3kpj5'>React.js</mark> . I’m passionate about creating clean, responsive, and user-friendly interfaces.
                            </p>
                            <p className='text-white'>I enjoy solving problems, learning new technologies, and turning ideas into real-world applications. My main focus is on React, but I also have experience with <mark className='css-1m3kpj5'>Redux</mark> , <mark className='css-1m3kpj5'>JavaScript (ES6+)</mark> , <mark className='css-1m3kpj5'>Tailwind CSS</mark> , and working with APIs.</p>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <Button className='btn' LinkComponent={'a'} href="#contact">Hire me</Button>
                            <Button className='btn' LinkComponent={'a'} target='_blank' href='https://drive.google.com/file/d/1_a1lF4pzD0wwrUsw-0Dgs1FZuxCSXwbg/view?usp=sharing' rel="noopener noreferrer">My Resume</Button>
                        </div>
                    </div>
                    <div className="relative h-[350px] lg:w-1/2 w-full overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 z-0 bg-blur-animate" />
                        <img
                            src={Avatars}
                            alt="avatars-image"
                            className="relative z-10 object-center object-cover w-full h-full"
                            style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                        />
                    </div>
                </div>
            </div>
            <Experience />
            <Projects />
            <ContactUs />
        </div>
    )
}

export default HomePage
