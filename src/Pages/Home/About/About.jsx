import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/png1.png'

const About = () => {
    return (
        <div className='w-[70%] mx-auto flex  justify-between items-center py-24 gap-20'>
            <div className='p-8 shadow-2xl rounded-2xl'>
                <div className='bg-[#191e22] mx-auto rounded-2xl'>
                    <img className='w-[90%] mx-auto ' src={img} alt="" />
                </div>
            </div>
            <div>
                <p className='color-main uppercase font-secondery'>Visit my portfolio & Hire me</p>
                <h2 className='text-[60px] font-[700]'>About Me</h2>
                <p className=' leading-[1.9] text-[#878e99]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos saepe ipsa cupiditate accusantium voluptatibus quidem nam, reprehenderit, et necessitatibus adipisci labore sit veritatis vero tempore sequi at sed facere dolore. Quae obcaecati eius quasi doloribus illum minus fugit.</p> 
                <p className=' leading-[1.9] text-[#878e99] mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos saepe ipsa cupiditate accusantium voluptatibus quidem nam, reprehenderit,</p>
                <div className='mt-16'>
                    <Link className='color-main bg-[#1f2125] p-3 rounded-lg shadow-md'>DOWNLOAD MY CV</Link>
                </div>
            </div>
        </div>
    );
};

export default About;