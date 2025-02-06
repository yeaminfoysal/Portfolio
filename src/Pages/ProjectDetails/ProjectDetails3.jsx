import React from 'react';
import fundbridge1 from '../../assets/Porject3/fundbridge.png'
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';


const ProjectDetails3 = () => {
    return (
        <div className="bg-main py-20">
            <div className='bg-secondery w-[95%] lg:w-[70%] mx-auto rounded-2xl shadow-xl shadow-[#000000] p-14 relative'>
                <div>
                    <img className='rounded-2xl' src={fundbridge1} alt="" />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-6 gap-10 items-center my-10'>
                    <div className='lg:col-span-4'>
                        <h1 className='text-[40px] font-bold'>Fund Bridge.</h1>
                        <p className='mt-6 leading-[1.9] color-desc'>The purpose of WhereIsIt is to provide a reliable and user-friendly platform for resolving lost and found issues efficiently. By bridging the gap between people who have lost items and those who have found them, this project aims to simplify the recovery process while offering a practical example of building a full-stack application.</p>
                    </div>
                    <div className='lg:col-span-2 space-y-5 '>
                        <button className='font-secondery uppercase bg-btn w-full  shadow-lg text-sm'>
                            <Link to={'https://fundbridge-6d21f.web.app/'}>Live Project</Link>
                        </button>
                        <button className='font-secondery uppercase bg-btn w-full  shadow-lg text-sm'>
                            <Link to={'https://github.com/programming-hero-web-course2/b10-a10-client-side-ariyanyeamin14'}>Github Repository</Link>
                        </button>
                    </div>
                </div>
                <div>
                    <hr className='border-[#030303]' />
                </div>
                <div className='flex gap-10 items-center flex-col lg:flex-row lg:justify-between mt-10'>
                    <div>
                        <h4 className='text-xl font-bold mb-6'>Features</h4>
                        <p className='leading-[1.9] color-desc'>A strategy is a general plan to achieve one or more long-term.</p>
                        <ul className='mt-6 leading-[1.9] color-desc list-inside list-disc space-y-3'>
                            <li>The Design Approach</li>
                            <li>Project Challenge</li>
                            <li>The Solution</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl font-bold mb-6'>Features</h4>
                        <p className='leading-[1.9] color-desc'>A strategy is a general plan to achieve one or more long-term.</p>
                        <ul className='mt-6 leading-[1.9] color-desc list-inside list-disc space-y-3'>
                            <li>The Design Approach</li>
                            <li>Project Challenge</li>
                            <li>The Solution</li>
                        </ul>
                    </div>
                </div>
                <div className='space-y-5 my-10'>
                    <p className='leading-[1.9] color-desc'>There are always some stocks, which illusively scale lofty heights in a given time period. However, the good show doesn’t last for these overblown toxic stocks as their current price is not justified by their fundamental strength.</p>
                    <p className='leading-[1.9] color-desc'>There are always some stocks, which illusively scale lofty heights in a given time period. However, the good show doesn’t last for these overblown toxic stocks as their current price is not justified by their fundamental strength.</p>
                </div>
                <div className='absolute top-0 right-0'>
                    <button className='color-main p-4 rounded-full shadow-xl shadow-[#121212]'> <Link to='/'> <IoCloseSharp size={25} /> </Link></button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails3;