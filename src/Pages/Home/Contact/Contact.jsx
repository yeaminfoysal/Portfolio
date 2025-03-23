import React from 'react';
import contactImg from '../../../assets/Contact/contact1.png'
import { Link } from 'react-router-dom';
import { FiFacebook } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// service id service_55j5qii
// template_lgd8r3n
// PUBLIC KEY sOFqAsZIa71R4oOEJ

const Contact = () => {
    const form = useRef();
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_55j5qii",
                "template_lgd8r3n",
                form.current,
                "sOFqAsZIa71R4oOEJ"
            )
            .then(
                (result) => {
                    setMessage("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    setMessage("Failed to send message, please try again.");
                }
            );
    };

    return (
        <div id='contact' className='section py-20 text-center w-[95%] lg:w-[80%] 2xl:max-w-[1492px] mx-auto'>
            <p className='color-main uppercase font-secondery'>Contact With Me</p>
            <h1 className='text-[60px] font-[700] color-gradient'>Contact</h1>
            <div className='grid grid-cols-1 xl:grid-cols-3 text-left mt-14 gap-10'>
                <div className='xl:col-span-1 p-10 shadow-xl shadow-[#000000] rounded-2xl bg-secondery'>
                    <img className='rounded-2xl w-full' src={contactImg} alt="" />
                    <h2 className='text-[30px] font-bold mt-8'>MD. Yeamin Foysal</h2>
                    <p className='my-5'>Front End Web Developer</p>
                    <p className='leading-[1.9] color-desc mb-5'>I am available for freelance work. Connect with me via and call in to my account.</p>
                    <p className='color-desc'>Phone: +880 1609800359 </p>
                    <p className='color-desc'>Email: yeaminfoysal14@gmail.com</p>
                    <div className='mt-10'>
                        <p className='uppercase mb-5'>find with me</p>
                        <div className='flex gap-10'>
                            <Link to={'https://github.com/yeaminfoysal'} className='bg-main p-3 rounded-xl shadow-lg color-main'><FaGithub size={30} /></Link>
                            <Link to={'https://www.linkedin.com/in/yeamin-foysal'} className='bg-main p-3 rounded-xl shadow-lg color-main'><FaLinkedin size={30} /></Link>
                            <Link to={'https://www.facebook.com/ariyan.yeamin.1/'} className='bg-main p-3 rounded-xl shadow-lg color-main'><FiFacebook size={30} /></Link>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-2 flex flex-col justify-center p-10 shadow-xl shadow-[#000000] rounded-2xl gap-4 bg-secondery'>
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        <div className='flex gap-6'>
                            <div className='flex-1'>
                                <h4 className='uppercase text-xs mb-4'>Your Name</h4>
                                <input className='bg-main p-3 w-full rounded-md border border-[#2a2a2a] shadow-inner shadow-[#111111] focus:border-[#8751f7] focus:outline-none ' type="text" name="name" id="" required />
                            </div>
                            <div className='flex-1'>
                                <h4 className='uppercase text-xs mb-4'>Phone Number</h4>
                                <input className='bg-main p-3 w-full rounded-md border border-[#2a2a2a] shadow-inner shadow-[#111111] focus:border-[#8751f7] focus:outline-none ' type="number" name="phone" id="" required />
                            </div>
                        </div>
                        <div className=''>
                            <h4 className='uppercase text-xs mb-4'>Email</h4>
                            <input className='bg-main p-3 w-full rounded-md border border-[#2a2a2a] shadow-inner shadow-[#111111] focus:border-[#8751f7] focus:outline-none ' type="email" name="email" id="" required />
                        </div>
                        <div className=''>
                            <h4 className='uppercase text-xs mb-4'>Subject</h4>
                            <input className='bg-main p-3 w-full rounded-md border border-[#2a2a2a] shadow-inner shadow-[#111111] focus:border-[#8751f7] focus:outline-none ' type="text" name="subject" id="" required />
                        </div>
                        <div className=''>
                            <h4 className='uppercase text-xs mb-4'>Your Message</h4>
                            <textarea className='bg-main p-3 w-full rounded-md border border-[#2a2a2a] shadow-inner shadow-[#111111] focus:border-[#8751f7] focus:outline-none ' name="message" id="" cols="30" rows="10" required></textarea>
                        </div>
                        <div>
                            <input className='uppercase cursor-pointer bg-btn w-full shadow-[#000000] shadow-md' type="submit" value="Send Message" />
                        </div>
                    </form>
                    {message && <p className="text-center text-green-500">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default Contact;