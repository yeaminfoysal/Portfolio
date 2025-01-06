import React from 'react';
import { FiFacebook } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import image from "../../../assets/png2.png"
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';

const Banner = () => {
    return (
        <div id="home" className='section py-24 overflow-hidden'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-evenly mx-auto w-[95%] lg:w-[85%] bg-[#191e22] px-[20px] py-10 lg:py-0 lg:px-[105px] rounded-2xl shadow-2xl'>
                <div className='font-secondery'>
                    <p>Welcome to my world</p>
                    <h1 className='text-[60px] font-bold text-white'>Hi, I'm <span className='color-main'>Yeamin Foysal</span></h1>
                    <h1 className='text-white text-[48px] font-[600]'>a <span> Front end web developer</span></h1>
                    <p>Hi, I’m Yeamn Foysal from Tangail, now living in Dhaka, Bangladesh. I’m an undergraduate student in Computer Science and Engineering with a deep passion for programming.</p>
                    <div className='mt-20'>
                        <p className='uppercase mb-5'>find with me</p>
                        <div className='flex gap-10'>
                            <Link to={'https://www.facebook.com/ariyan.yeamin.1/'} className='bg-[#1f2125] p-3 rounded-xl shadow-lg'><FiFacebook size={30} /></Link>
                            <Link to={'https://github.com/ariyanyeamin14'} className='bg-[#1f2125] p-3 rounded-xl shadow-lg'><FaGithub size={30} /></Link>
                            <Link to={'https://bd.linkedin.com/'} className='bg-[#1f2125] p-3 rounded-xl shadow-lg'><FaLinkedin size={30} /></Link>
                        </div>
                    </div>
                </div>
                <div className='mx-auto text-ringt items-right'>
                    <img className='h-[700px]' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;