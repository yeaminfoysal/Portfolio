import React from 'react';

const Education = () => {
    return (
        <div id='education' className='section py-20 text-center w-[95%] lg:w-[70%] mx-auto'>
            <p className='color-main uppercase font-secondery'>See My Education Background</p>
            <h1 className='text-[60px] font-[700]'>My Education </h1>
            <div className='text-left grid grid-cols-1 gap-16 mt-10 outline-2 outline-slate-100 outline-offset-1'>
                <div className='bg-[#191e22] rounded-xl border-2 border-[#2c353e] shadow-[#141414] shadow-2xl'>
                    <div className='flex justify-between items-center p-10 border-b-2 border-[#2c353e] '>
                        <div>
                            <h2 className='font-primary text-2xl font-[500]'>BSc in Computer Science</h2>
                            <h4 className='text-lg font-medium mt-5'>Northern Univarsity</h4>
                        </div>
                        <div>
                            <button className='bg-[#ff014f] rounded-3xl py-[7px] px-[30px] text-lg font-medium text-white'>2024 - Present</button>
                        </div>
                    </div>
                    <div className='p-10  leading-relaxed'>
                        <p>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture. The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. </p>
                    </div>
                </div>
                <div className='bg-[#191e22] rounded-xl border-2 border-[#2c353e] shadow-[#141414] shadow-2xl'>
                    <div className='flex justify-between items-center p-10 border-b-2 border-[#2c353e]'>
                        <div>
                            <h2 className='font-primary text-2xl font-[500]'>Higher Secondary School Education in Science</h2>
                            <h4 className='text-lg font-medium mt-5'>Ideal College, Dhanmondhi</h4>
                        </div>
                        <div>
                            <button className='bg-[#ff014f] rounded-3xl py-[7px] px-[30px] text-lg font-medium text-white'>2021 - 2023</button>
                        </div>
                    </div>
                    <div className='p-10  leading-relaxed'>
                        <p>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture. The education should be very interactual. </p>
                    </div>
                </div>
                <div className='bg-[#191e22] rounded-xl border-2 border-[#2c353e] shadow-[#141414] shadow-2xl'>
                    <div className='flex justify-between items-center p-10 border-b-2 border-[#2c353e]'>
                        <div>
                            <h2 className='font-primary text-2xl font-[500]'>Secondary School Education in Science</h2>
                            <h4 className='text-lg font-medium mt-5'>BAF Shaheen College & School</h4>
                        </div>
                        <div>
                            <button className='bg-[#ff014f] rounded-3xl py-[7px] px-[30px] text-lg font-medium text-white'>2019 - 2021</button>
                        </div>
                    </div>
                    <div className='p-10  leading-relaxed'>
                        <p>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture. The education should be very interactual.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;