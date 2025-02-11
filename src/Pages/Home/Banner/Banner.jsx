import React from 'react';
import { FiFacebook } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect } from "react";
import "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // Dark theme

const Banner = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const code = `const profile = {
        name: 'MD Yeamin Foysal',
        title: 'Full-stack Web Developer',
        skills: ['React', 'Express', 'MongoDB', 
        'Node', 'Next','JavaScript', 'Git', 'Motion' 
        'Firebase' ],
        hardWorker: true,
        quickLearner: true,
        problemSolver: true,
        hireable: function() {
            return (
                this.hardWorker &&
                this.problemSolver &&
                this.skills.length >= 5
            );
        }
    };`;

    return (
        <div id="home" className='section py-28 overflow-hidden'>
            <div className='flex flex-col xl:flex-row items-center justify-evenly mx-auto w-[95%] 2xl:w-[85%] bg-secondery px-[20px] py-10 md:py-20 md:px-[45px] lg:px-[55px] xl:px-[50px] 2xl:px-[105px] rounded-2xl shadow-2xl gap-10 '>
                <div className='font-secondery'>
                    <h1 className='text-[40px] md:text-[50px] 2xl:text-[55px] font-bold text-white mb-4 md:mb-6'>Hi, I'm <span className='color-gradient'>Yeamin Foysal</span></h1>
                    <h1 className='text-white text-[30px]  md:text-[38px] font-[600] mb-6 md:mb-8'>a <span> Front end web developer</span></h1>
                    <p>Hi, I’m Yeamn Foysal from Tangail, now living in Dhaka, Bangladesh. I’m an undergraduate student in Computer Science and Engineering with a deep passion for programming.</p>
                    <div className='mt-10 md:mt-20'>
                        <p className='uppercase mb-5'>find with me</p>
                        <div className='flex gap-10'>
                            <Link to={'https://github.com/ariyanyeamin14'} className='bg-[#020700] p-3 rounded-xl shadow-lg'><FaGithub size={30} color='#8851f7' /></Link>
                            <Link to={'https://www.linkedin.com/in/yeamin-foysal'} className='bg-[#020700] p-3 rounded-xl shadow-lg'><FaLinkedin size={30} color='#8851f7' /></Link>
                            <Link to={'https://www.facebook.com/ariyan.yeamin.1/'} className='bg-[#020700] p-3 rounded-xl shadow-lg'><FiFacebook size={30} color='#8851f7' /></Link>
                        </div>
                    </div>
                </div>
                <div className='mx-auto  items-right sniped-box'>
                        <div className="bg-[#8851f7] p-[1px] rounded-lg  w-[320px]  md:w-full 
                      max-w-2xl">
                            {/* Window Header */}
                            <div className="flex items-center space-x-2 px-3 py-5 bg-main rounded-t-lg">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>
                            {/* Code Block */}
                            <pre className="p-3 rounded-b-lg mt-0 ">
                                <code className="language-javascript">{code}</code>
                            </pre>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;