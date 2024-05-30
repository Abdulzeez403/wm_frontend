import React from 'react'

import WhyImage from "../../../public/assests/whywalk.png"
import WhyImage2 from "../../../public/assests/whywalk2.png"
import Image from "next/image"
import { LuUsers2 } from "react-icons/lu";
import { LiaBookReaderSolid } from "react-icons/lia";
import { PiStudentLight } from "react-icons/pi";

interface IProp {
    title: string,
    icon: any,
    className: any
}

export const Whywalkmetru = () => {

    const Itemlist = ({ title, icon, className }: IProp) => {
        return (
            <div className='flex gap-x-4 items-center py-2'>
                <div className={`rounded-lg p-2 ${className}`}>
                    {icon}
                </div>
                <h4 className='font-semibold text-[1.2rem]'>{title}</h4>
            </div>
        )
    }
    return (
        <div className=''>

            <div className='px-80 py-10'>

                <div className="flex justify-between">

                    <div >
                        <h4 className='font-bold text-[1.2rem]'>Why Walkmetru</h4>
                        <h2 className='text-[60px] w-[90%] leading-[60px] pb-6'>1-on-1 Learning experience</h2>

                        <Itemlist
                            className='bg-[#6ee7d1]'
                            title="Personalised &  tailored  sessions."
                            icon={<LuUsers2 color="green" size={40} />}
                        />

                        <Itemlist
                            className='bg-blue-300'
                            title="Master any skills through interactive learning"
                            icon={<LiaBookReaderSolid color="green" size={40} />}
                        />
                        <Itemlist
                            className='bg-[#ebbf7a]'
                            title="Connect and Learn 1-on-1 from professionals worldwide"
                            icon={<PiStudentLight color="#F49700" size={40} />}
                        />



                    </div>

                    <div>
                        <Image src={WhyImage} alt="Image" />
                    </div>
                </div>
            </div>

            {/* <div className=' bg-black my-4'>

                <div>
                    <div className=' flex justify-center items-center px-80'>
                        <div className=' '>
                            <h4 className=' text-[40px] leading-tight font-bold text-teritory mr-10'>learn faster with 1-on-1 classes</h4>
                            <p className='text-[20px] text-teritory mt-2'>Enhance your skills with personalized learning experiences</p>
                            <button className='bg-secondary p-2 rounded-md px-6 text-teritory font-semibold mt-4'> Explore 1-on-1 Courses</button>
                        </div>
                        <div className=''>
                            <Image src={WhyImage2} alt="image" width={800} height={800} />
                        </div>

                    </div>



                </div>

            </div> */}

            <div className="bg-black my-4 relative">
                <div className="flex justify-center items-center relative px-10">
                    <div className="absolute left-80 p-4 text-white w-1/2">
                        <h4 className="text-5xl leading-tight font-bold text-teritory mr-10">Learn faster with 1-on-1 classes</h4>
                        <p className="text-2xl text-teritory mt-2">Enhance your skills with personalized learning experiences</p>
                        <button className="bg-secondary p-2 rounded-md px-6 text-teritory font-semibold mt-4">Explore 1-on-1 Courses</button>
                    </div>
                    <div className="w-full flex justify-end">
                        <Image src={WhyImage2} alt="image" width={800} height={800} />
                    </div>
                </div>
            </div>
        </div>

    )
}
