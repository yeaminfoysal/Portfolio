import React from 'react';
import wintercherity1 from '../../assets/Project2/wintercherity.png'
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';


const ProjectDetails2 = () => {
    return (
        <div className="bg-main py-20">
            <div className='bg-[#1e2024] w-[70%] mx-auto rounded-2xl shadow-xl shadow-[#121212] p-14 relative'>
                <div>
                    <img className='rounded-2xl' src={wintercherity1} alt="" />
                </div>
                <div className='grid grid-cols-6 gap-10 items-center my-10'>
                    <div className='col-span-4'>
                        <h1 className='text-[40px] font-bold'>Winter Cherity</h1>
                        <p className='mt-6 leading-[1.9] text-[#878e99]'>The purpose of WhereIsIt is to provide a reliable and user-friendly platform for resolving lost and found issues efficiently. By bridging the gap between people who have lost items and those who have found them, this project aims to simplify the recovery process while offering a practical example of building a full-stack application.</p>
                    </div>
                    <div className='col-span-2 space-y-5 '>
                        <button className='font-secondery uppercase color-main w-full py-4  shadow-lg text-sm'>
                            <Link to={'https://winter-charity.web.app'}>Live Project</Link>
                        </button>
                        <button className='font-secondery uppercase color-main w-full py-4  shadow-lg text-sm'>
                            <Link to={''}>Github Repository</Link>
                        </button>
                    </div>
                </div>
                <div>
                    <hr className='border-[#030303]' />
                </div>
                <div className='flex gap-10 items-center justify-between mt-10'>
                    <div>
                        <h4 className='text-xl font-bold mb-6'>Features</h4>
                        <p className='leading-[1.9] text-[#878e99]'>A strategy is a general plan to achieve one or more long-term.</p>
                        <ul className='mt-6 leading-[1.9] text-[#878e99] list-inside list-disc space-y-3'>
                            <li>The Design Approach</li>
                            <li>Project Challenge</li>
                            <li>The Solution</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl font-bold mb-6'>Features</h4>
                        <p className='leading-[1.9] text-[#878e99]'>A strategy is a general plan to achieve one or more long-term.</p>
                        <ul className='mt-6 leading-[1.9] text-[#878e99] list-inside list-disc space-y-3'>
                            <li>The Design Approach</li>
                            <li>Project Challenge</li>
                            <li>The Solution</li>
                        </ul>
                    </div>
                </div>
                <div className='space-y-5 my-10'>
                    <p className='leading-[1.9] text-[#878e99]'>There are always some stocks, which illusively scale lofty heights in a given time period. However, the good show doesn’t last for these overblown toxic stocks as their current price is not justified by their fundamental strength.</p>
                    <p className='leading-[1.9] text-[#878e99]'>There are always some stocks, which illusively scale lofty heights in a given time period. However, the good show doesn’t last for these overblown toxic stocks as their current price is not justified by their fundamental strength.</p>
                </div>
                <div className='absolute top-0 right-0'>
                    <button className='color-main p-4 rounded-full shadow-xl shadow-[#121212]'> <Link to='/'> <IoCloseSharp size={25} /> </Link></button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails2;