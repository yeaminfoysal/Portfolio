import React from 'react';
import { Link } from 'react-router-dom';
import whereisit from '../../../assets/Projects/whereisit.png'
import fundbridge from '../../../assets/Projects/fundbridge.png'
import wintercherity from '../../../assets/Projects/wintercherity.png'

const Projects = () => {
    return (
        <div id='projects' className='py-20 text-center w-[95%] lg:w-[70%] mx-auto'>
            <p className='color-main uppercase font-secondery'>Here is a sample of projects I've worked on.</p>
            <h1 className='text-[60px] font-[700]'>Selected projects</h1>
            <div className='flex flex-col mt-10 gap-16'>
                <div className='flex flex-col lg:flex-row lg:justify-between items-center text-left lg:h-[500px]'>
                    <div className='flex-1 flex flex-col justify-center bg-gradient-to-r from-[#091020] to-[#09102061] p-6 lg:p-20 lg:rounded-s-2xl h-full'>
                        <h1 className='text-[40px] font-bold mb-6'>Lost & Found Website</h1>
                        <p className=' leading-[1.9] text-[#878e99]'>Discover how our strategic UX/UI enhancements transformed a struggling e-commerce site into a revenue-generating powerhouse.</p>
                        <div className='mt-14'>
                            <Link to={'/project1'}>View Details</Link>
                        </div>
                    </div>
                    <div  className='flex-1 bg-[#091020] flex h-full items-center lg:rounded-e-2xl'>
                        <img className='w-[80%] mx-auto rounded-xl' src={whereisit} alt="" />
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row lg:justify-between items-center text-left lg:h-[500px]'>
                    <div className='flex-1 flex flex-col justify-center bg-gradient-to-r from-[#201209] to-[#20180961] p-6 lg:p-20 lg:rounded-s-2xl h-full'>
                        <h1 className='text-[40px] font-bold mb-6'>Donation on Winter Website</h1>
                        <p className=' leading-[1.9] text-[#878e99]'>Discover how our strategic UX/UI enhancements transformed a struggling e-commerce site into a revenue-generating powerhouse.</p>
                        <div className='mt-14'>
                            <Link to={'/project2'}>View Details</Link>
                        </div>
                    </div>
                    <div  className='flex-1 bg-[#201209] flex h-full items-center lg:rounded-e-2xl'>
                        <img className='w-[80%] mx-auto rounded-xl' src={wintercherity} alt="" />
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row lg:justify-between items-center text-left lg:h-[500px]'>
                    <div className='flex-1 flex flex-col justify-center bg-gradient-to-r from-[#091720] to-[#09152061] p-6 lg:p-20 lg:rounded-s-2xl h-full'>
                        <h1 className='text-[40px] font-bold mb-6'>Fund & Donation Website</h1>
                        <p className=' leading-[1.9] text-[#878e99]'>Discover how our strategic UX/UI enhancements transformed a struggling e-commerce site into a revenue-generating powerhouse.</p>
                        <div className='mt-14'>
                            <Link to={'/project3'}>View Details</Link>
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