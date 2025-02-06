import React from 'react';
import contactImg from '../../../assets/Contact/contact1.png'
import { Link } from 'react-router-dom';
import { FiFacebook } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div id='contact' className='section py-20 text-center w-[95%] lg:w-[70%] mx-auto'>
            <p className='color-main uppercase font-secondery'>Contact With Me</p>
            <h1 className='text-[60px] font-[700] color-gradient'>Contact</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 text-left mt-14 gap-10'>
                <div className='lg:col-span-1 p-10 shadow-xl shadow-[#000000] rounded-2xl bg-secondery'>
                    <img className='rounded-2xl' src={contactImg} alt="" />
                    <h2 className='text-[30px] font-bold mt-8'>MD. Yeamin Foysal</h2>
                    <p className='my-5'>Front End Web Developer</p>
                    <p className='leading-[1.9] color-desc mb-5'>I am available for freelance work. Connect with me via and call in to my account.</p>
                    <p className='color-desc'>Phone: +880 1609800359 </p>
                    <p className='color-desc'>Email: yeaminfoysal14@gmail.com</p>
                    <div className='mt-10'>
                        <p className='uppercase mb-5'>find with me</p>
                        <div className='flex gap-10'>
                            <Link to={'https://www.facebook.com/ariyan.yeamin.1/'} className='bg-main p-3 rounded-xl shadow-lg color-main'><FiFacebook size={30} /></Link>
                            <Link to={'https://github.com/ariyanyeamin14'} className='bg-main p-3 rounded-xl shadow-lg color-main'><FaGithub size={30} /></Link>
                            <Link to={'https://bd.linkedin.com/'} className='bg-main p-3 rounded-xl shadow-lg color-main'><FaLinkedin size={30} /></Link>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-2 flex flex-col justify-center p-10 shadow-xl shadow-[#000000] rounded-2xl gap-4 bg-secondery'>
                    <div className='flex gap-6'>
                        <div className='flex-1'>
                            <h4 className='uppercase text-xs mb-4'>Your Name</h4>
                            <input className='bg-main p-3 w-full rounded-md border border-[#2a2a2a] shadow-inner shadow-[#111111] focus:border-[#8751f7] focus:outline-none ' type="text" name="" id="" />
                        </div>
                        <div className='flex-1'>
                            <h4 className='uppercase text-xs mb-4'>Phone Number</h4>
                            <input className='bg-main p-3 w-full rounded-md border border-[#2a2a2a] shadow-inner shadow-[#111111] focus:border-[#8751f7] focus:outline-none ' type="text" name="" id="" />
                        </div>
                    </div>
                    <div className=''>
                        <h4 className='uppercase text-xs mb-4'>Email</h4>
                        <input className='bg-main p-3 w-full rounded-md border border-[#2a2a2a] shadow-inner shadow-[#111111] focus:border-[#8751f7] focus:outline-none ' type="text" name="" id="" />
                    </div>
                    <div className=''>
                        <h4 className='uppercase text-xs mb-4'>Subject</h4>
                        <input className='bg-main p-3 w-full rounded-md border border-[#2a2a2a] shadow-inner shadow-[#111111] focus:border-[#8751f7] focus:outline-none ' type="text" name="" id="" />
                    </div>
                    <div className=''>
                        <h4 className='uppercase text-xs mb-4'>Your Message</h4>
                        <textarea className='bg-main p-3 w-full rounded-md border border-[#2a2a2a] shadow-inner shadow-[#111111] focus:border-[#8751f7] focus:outline-none ' name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <input className='uppercase cursor-pointer bg-btn w-full shadow-[#000000] shadow-md' type="submit" value="Send Message" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;