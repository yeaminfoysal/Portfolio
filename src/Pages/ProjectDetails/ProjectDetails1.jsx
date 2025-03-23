import React from 'react';
import whereisit1 from '../../assets/project1/whereisit1.png'
import whereisit2 from '../../assets/project1/whereisit_allItems.png'
import whereisit3 from '../../assets/project1/whereisit-details.png'
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ProjectDetails1 = () => {
    const technologies = [
        {
            type: 'Front-End',
            tech: ['HTML', 'CSS', 'TailwindCSS', 'Javascript', 'React.js']
        },
        {
            type: 'Back-End',
            tech: ['Node.js', 'Express.js']
        },
        {
            type: 'Authentication',
            tech: ['Firebase']
        },
        {
            type: 'Databse',
            tech: ['MongoDB']
        }
    ]

    const features = [
        { id: 1, type: 'Report Lost Items', desc: 'Report lost belongings with details and images.' },
        { id: 2, type: 'Browse Found Items', desc: 'Search a database of found items.' },
        { id: 3, type: 'Interactive Features', desc: 'Communicate securely to recover items.' },
        { id: 4, type: 'File Uploads', desc: 'Upload images for visual reference.' }
    ]
    return (
        <div className="bg-main py-20">
            <div className='bg-secondery w-[95%] lg:w-[80%] 2xl:max-w-[1492px] mx-auto rounded-2xl shadow-xl shadow-[#000000] p-14 relative'>
                <div>
                    <img className='rounded-2xl' src={whereisit1} alt="" />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-6 gap-10 items-center my-10'>
                    <div className='lg:col-span-4'>
                        <h1 className='text-[40px] font-bold'>WhereIsIt.</h1>
                        <p className='mt-6 leading-[1.9] color-desc'>The purpose of WhereIsIt is to provide a reliable and user-friendly platform for resolving lost and found issues efficiently. By bridging the gap between people who have lost items and those who have found them, this project aims to simplify the recovery process while offering a practical example of building a full-stack application.</p>
                    </div>
                    <div className='lg:col-span-2 space-y-5 '>
                        <button className='font-secondery uppercase bg-btn w-full  shadow-lg text-sm'>
                            <Link to={'https://whereisit-cf11d.web.app'}>Live Project</Link>
                        </button>
                        <button className='font-secondery uppercase bg-btn w-full shadow-lg text-sm'>
                            <Link to={'https://github.com/yeaminfoysal/WhereIsIt-ClientSide'}>Github Repository</Link>
                        </button>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row lg:justify-between gap-10 items-center mt-10 md:items-start'>
                    <div>
                        <h4 className='text-xl font-bold mb-6'>Features</h4>
                        <p className='leading-[1.9] color-desc'>Features of this website are shortly described:</p>
                        <ul className='mt-6 leading-[1.9] color-desc list-inside list-disc space-y-3'>
                            {
                                features.map(feature => (
                                    <li className='font-semibold'>{feature.type}: <p key={feature.id} className='inline font-normal pl-1' >{feature.desc}</p></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl font-bold mb-6'>Technologies</h4>
                        <p className='leading-[1.9] color-desc'>Technologies I have used on this project are:</p>
                        <ul className='mt-6 leading-[1.9] color-desc list-inside list-disc space-y-3'>
                            {
                                technologies.map(type => (
                                    <li className='font-semibold'>{type.type}: {type.tech.map(t => <p key={t} className='inline font-normal' >{t}, </p>)} </li>
                                ))
                            }
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

export default ProjectDetails1;