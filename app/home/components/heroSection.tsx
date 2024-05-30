import React from 'react'
import Image from 'next/image'


export const HeroSection = () => {
    return (
        <div className='bg-primary'>

            <div className='py-[140px]'>

                <div className='flex justify-center  '>
                    <div className='w-[50%]'>
                        <h4 className='text-center  text-[86px] leading-tight font-bold text-teritory'>Learn Anything
                            on a Live 1-on-1 call</h4>
                        <p className='text-center text-[20px] text-teritory'>Improve your skills, learn 1-on-1 from professionals worldwide.</p>
                    </div>

                </div>
                <div className='flex justify-center items-center'>
                    <div className='flex gap-x-10 pt-10'>
                        <button className='bg-secondary p-2 rounded-md px-6 text-teritory font-semibold'> Explore 1-on-1 Courses</button>
                        <button className='border-2 border-secondary  p-2 rounded-md px-20 text-secondary font-semibold'> SignUp</button>
                    </div>
                </div>

            </div>



        </div>
    )
}

