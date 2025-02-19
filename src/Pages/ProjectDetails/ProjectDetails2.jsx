import React from 'react';
import eduhaven from '../../assets/Projects/eduhaven.png'
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';


const ProjectDetails2 = () => {
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
            tech: ['Firebase', 'JWT (JSON Web Token)']
        },
        {
            type: 'Databse',
            tech: ['MongoDB']
        }
    ];

    const features = [
        {
            id: 1,
            type: 'Role-based Access',
            desc: 'Distinct user roles—Student, Teacher, and Admin.'
        },
        {
            id: 2,
            type: 'Secure Payments',
            desc: 'Stripe integration for handling payments efficiently.'
        },
        {
            id: 3,
            type: 'Real-Time Notifications',
            desc: 'Alerts and feedback powered by SweetAlert2.'
        },
        {
            id: 4,
            type: 'Fully Responsive',
            desc: 'Optimized for mobile, tablet, and desktop devices.'
        }
    ]
    return (
        <div className="bg-main py-20">
            <div className='bg-secondery w-[95%] lg:w-[70%] mx-auto rounded-2xl shadow-xl shadow-[#000000] p-14 relative'>
                <div>
                    <img className='rounded-2xl' src={eduhaven} alt="" />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-6 gap-10 items-center my-10'>
                    <div className='lg:col-span-4'>
                        <h1 className='text-[40px] font-bold'>EduHaven</h1>
                        <p className='mt-6 leading-[1.9] color-desc'>This is a MERN stack project. EduManage will revolutionize the way educational institutions, tutors, and students interact, making skill learning and class management more efficient and accessible than ever before.</p>
                    </div>
                    <div className='lg:col-span-2 space-y-5 '>
                        <button className='font-secondery uppercase bg-btn w-full  shadow-lg text-sm'>
                            <a target='_blank' href={'https://eduhaven-14.web.app/'}>Live Project</a>
                        </button>
                        <button className='font-secondery uppercase bg-btn w-full  shadow-lg text-sm'>
                            <a target='_blank' href={'https://github.com/yeaminfoysal/EduHaven-ClientSide'}>Github Repository</a>
                        </button>
                    </div>
                </div>
                <div>
                    <hr className='border-[#030303]' />
                </div>
                <div className='flex gap-10 items-center flex-col lg:flex-row lg:justify-between mt-10'>
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

export default ProjectDetails2;