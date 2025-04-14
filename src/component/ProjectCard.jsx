import React from 'react';
import { Button } from '@mui/material';

const ProjectCard = ({ image, title, description, techStack, link }) => {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <div className="card-body">
                <h6>{title}</h6>
                <p className='text-[#ffffffeb] !text-sm !font-normal'>
                    {description}
                </p>
                <p className='!text-center py-1.5 text-[#ffffffeb]'><strong>Technology</strong></p>
                <ul className='flex flex-wrap gap-3 justify-center text-blue-100 text-sm'>
                    {techStack.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
                <div className='flex justify-center items-center py-3'>
                    <Button
                        type="button"
                        className="btn !bg-none !w-44 !rounded-2xl !bg-[#ffffff14] hover:!bg-[#e3dfdf59] !text-[#ffffffeb]"
                        LinkComponent={'a'}
                        target="_blank"
                        href={link}
                    >
                        Visit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
