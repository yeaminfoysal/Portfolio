import React from 'react';
import { Link } from 'react-router-dom';
import whereisit from '../../../assets/Projects/whereisit.png'
import fundbridge from '../../../assets/Projects/fundbridge.png'
import eduhaven from '../../../assets/Projects/eduhaven.png'

const Projects = () => {
    return (
        <div id='projects' className='section py-20 text-center w-[95%] lg:w-[80%] 2xl:max-w-[1492px] mx-auto'>
            <p className='color-main uppercase font-secondery'>Here is a sample of projects I've worked on.</p>
            <h1 className='text-[60px] font-[700] color-gradient'>Selected projects</h1>
            <div className='flex flex-col mt-10 gap-16'>
                <div className='flex flex-col lg:flex-row lg:justify-between items-center text-left lg:h-[500px]'>
                    <div className='flex-1 flex flex-col justify-center bg-gradient-to-r from-[#092013] to-[#09102061] p-6 lg:p-20 lg:rounded-s-2xl h-full'>
                        <h1 className='text-[40px] font-bold mb-6'>Education Management Application</h1>
                        <p className=' leading-[1.9] color-desc'>Discover how our strategic UX/UI enhancements transformed a struggling e-commerce site into a revenue-generating powerhouse.</p>
                        <div className='mt-14'>
                            <Link className='bg-btn' to={'/project2'}>View Details</Link>
                        </div>
                    </div>
                    <div  className='flex-1 bg-[#091020] flex h-full items-center lg:rounded-e-2xl'>
                        <img className='w-[80%] mx-auto rounded-xl' src={eduhaven} alt="" />
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row lg:justify-between items-center text-left lg:h-[500px]'>
                    <div className='flex-1 flex flex-col justify-center bg-gradient-to-r from-[#091020] to-[#09102061] p-6 lg:p-20 lg:rounded-s-2xl h-full'>
                        <h1 className='text-[40px] font-bold mb-6'>Lost & Found Website</h1>
                        <p className=' leading-[1.9] color-desc'>Discover how our strategic UX/UI enhancements transformed a struggling e-commerce site into a revenue-generating powerhouse.</p>
                        <div className='mt-14'>
                            <Link className='bg-btn'  to={'/project1'}>View Details</Link>
                        </div>
                    </div>
                    <div  className='flex-1 bg-[#091020] flex h-full items-center lg:rounded-e-2xl'>
                        <img className='w-[80%] mx-auto rounded-xl' src={whereisit} alt="" />
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row lg:justify-between items-center text-left lg:h-[500px]'>
                    <div className='flex-1 flex flex-col justify-center bg-gradient-to-r from-[#091720] to-[#09152061] p-6 lg:p-20 lg:rounded-s-2xl h-full'>
                        <h1 className='text-[40px] font-bold mb-6'>Fund & Donation Website</h1>
                        <p className=' leading-[1.9] color-desc'>Discover how our strategic UX/UI enhancements transformed a struggling e-commerce site into a revenue-generating powerhouse.</p>
                        <div className='mt-14'>
                            <Link className='bg-btn'  to={'/project3'}>View Details</Link>
                        </div>
                    </div>
                    <div  className='flex-1 bg-[#091720] flex h-full items-center lg:rounded-e-2xl'>
                        <img className='w-[80%] mx-auto rounded-xl' src={fundbridge} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;