import React from 'react';
import Ppl_Logo from '../assets/PPl-logo.png';
import Enbiosis_Logo from '../assets/enbiosis-logo.png';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
            image: Ppl_Logo,
            title: 'PAUL & PAUL LAWYERS',
            description: `A project called PPLawyers is a web and admin panel designed for
            managing lawyer-related data and services. The administrator can create and schedule a post, which will upload to the dashboard at the designated time. The post will display users on the dashboard, display the Lawyers category, and invite them to complete the contact form. and the administrator receives the form that was sent in the mail and connects with the user or client.`,
            techStack: ['React js', 'TypeScript', 'Material ui', 'Tailwind css', 'JQuery'],
            link: 'https://ppl-dot-able-bazaar-443904-k8.uc.r.appspot.com/',
        },
        {
            image: Enbiosis_Logo,
            title: 'ENBIOSIS WEB-APP',
            description: `Maintained and enhanced the frontend of the Enbiosis admin panel
            using React.js, improving functionality and user experience. Fixed critical bugs and performance issues, ensuring a smooth and efficient interface for admin users. Developed new features and integrated them seamlessly into the existing codebase. Collaborated with backend developers to debug API issues and improve data handling.`,
            techStack: ['React js', 'Javascript', 'Bootstrap', 'JQuery'],
            link: 'https://app.enbiosis.com/',
        },
    ];

    return (
        <div id="projects" className="css-15awpur overflow-hidden border-t border-white/20">
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 lg:py-8 sm:py-6 py-4'>
                <div className="css-3m0ceo">
                    <p className="chakra-text css-9x44go">My Projects</p>
                </div>
                <div className="css-18g3eep">
                    <h2 className="sm:pl-[30px] font-bold sm:text-4xl sm:leading-[1.2] leading-[1.33] text-[20px] text-[#ffffffeb]">
                        <p className="chakra-text css-0">Here are some of My Projects</p>
                    </h2>
                </div>
                <hr className="sc-iBkjds dzDijg" />
                <section className='main'>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Projects;
