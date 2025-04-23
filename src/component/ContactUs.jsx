import React, { useState } from 'react';
import { Button } from '@mui/material';
import emailjs from 'emailjs-com';
import { Bounce, toast } from 'react-toastify';

const ContactUs = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = 'Name is required';
        if (!form.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email';
        if (!form.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!validate()) return;

        emailjs.send(
            'service_bwqhxuj',
            'template_g5urvhk',
            form,
            'TiZHyCI-5WjHuPI9g'
        )
            .then(() => {
                toast.success('Message sent!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setForm({ name: '', email: '', message: '' });
            })
            .catch((err) => {
                console.error('FAILED...', err);
                alert('Something went wrong. Please try again later.');
            });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <section id='contact' className='border-t border-white/20'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 lg:py-8 sm:py-6 py-4'>
                <div className='flex justify-center flex-col gap-2.5 items-center'>
                    <p className='text-white font-medium text-3xl'>Let's Connect</p>
                    <input
                        className='placeholder:text-gray-50/25 outline-none text-gray-50 p-3 h-12 rounded-xl sm:w-[400px] w-[290px] bg-black focus:bg-gray-800'
                        placeholder='Name'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                    <input
                        className='placeholder:text-gray-50/25 outline-none text-gray-50 p-3 h-12 rounded-xl sm:w-[400px] w-[290px] bg-black focus:bg-gray-800'
                        placeholder='Email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                    <textarea
                        className='placeholder:text-gray-50/25 outline-none text-gray-50 p-3 rounded-xl sm:w-[400px] w-[290px] bg-black focus:bg-gray-800'
                        rows='3'
                        placeholder='Message'
                        name='message'
                        value={form.message}
                        onChange={handleChange}
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

                    <Button className='btn sm:w-[400px] w-[290px] !font-bold !text-white' onClick={handleSend}>Send</Button>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;