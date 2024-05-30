"use client"
import React, { useState } from 'react'
import Image from "next/image"
import login from "../../../public/assests/login.png"
import Link from 'next/link'
import blogs from "../../../public/assests/blog2.png"
import { stepsData, stepsData1 } from './data'


interface IProps {
    img: any,
    number: any,
    title: string,
    desc: string,
    show: boolean
}


export const HowitworkSection = () => {
    // const step = false;

    const CustomizedstepComponent = ({ img, number, title, desc, show }: IProps) => {
        return (

            <div className='flex justify-center gap-x-32 py-10'>
                <div>
                    <Image src={img} alt={`Step ${number} image`} width={100} height={50} />
                </div>
                <div className="relative pt-8">
                    <div className="rounded-full border-2 border-dotted p-2 w-10 h-10 text-center text-white ">
                        <h4>{number}</h4>
                    </div>
                    {show && (
                        <div className="w-[2px] h-[140px] border-l-2 border-dotted border-slate-200 absolute left-1/2 transform -translate-x-1/2" />
                    )}
                </div>
                <div className='w-60'>
                    <h2 className='text-white font-bold'>{title}</h2>
                    <p className='text-slate-300 text-sm'>{desc}</p>
                </div>
            </div>
        )

    }








    return (
        <div>

            <div className="py-10 bg-black px-80">
                <div>

                    <h4 className='text-white text-center text-[3rem] py-10'>How it works For Learners</h4>

                    <div>

                    </div>
                    {stepsData.map((step, index) => (
                        <CustomizedstepComponent
                            key={index}
                            img={step.img}
                            number={step.number}
                            title={step.title}
                            desc={step.desc}
                            show={index < stepsData.length - 1}
                        />
                    ))}


                </div>

                <div>

                    <h4 className='text-white text-center text-[3rem] py-10'>How it works For Knowledge Sharers</h4>

                    <div>

                    </div>
                    {stepsData1.map((step, index) => (
                        <CustomizedstepComponent
                            key={index}
                            img={step.img}
                            number={step.number}
                            title={step.title}
                            desc={step.desc}
                            show={index < stepsData1.length - 1}
                        />
                    ))}


                </div>
            </div>

            <div className='flex gap-x-10 py-14 px-80'>
                <div className='border-r-2'>
                    <h4 className='text-green-400 text-[3rem] font-extrabold '>70%</h4>
                    <p className='w-35'>70% of professionals prefers the interpersonal connection and comfort of providing 1-to-1 sessions with peers over creating recorded videos</p>
                </div>

                <div>
                    <h4 className='text-green-400 text-[3rem] font-extrabold '>90%</h4>
                    <p className='w-35'>90% of professionals express willingness to pay to learn specifics topics and area of interest from skilled peer in a live 1-to-1 settings rather than investing time in watching lengthy pre-recorded videos.s</p>
                </div>
            </div>


            <div className='bg-primary py-20 my-10'>

                <div className='flex justify-center '>
                    <div>
                        <h4 className='text-center text-white text-[3rem] py-3 w-[40rem]'>Start your 1-on-1 Learning Journey now.</h4>
                        <div className='flex justify-center '>

                            <button className='border-2 border-secondary  p-2 rounded-md px-20 text-white font-semibold bg-secondary '> Get Started</button>
                        </div>
                    </div>
                </div>


            </div>

            <div className='px-80'>
                <h4 className='font-bold text-[2rem] pt-10'>Blogs</h4>

                <div className="flex justify-between items-center  pt-6">

                    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
                        <Image className="w-full" src={blogs} alt="Image" width={160} height={160} />
                        <div className="font-bold text-xl my-2">Monitixe your skill</div>
                        <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repudiandae quas quam reprehenderit repellat inventore autem ipsa ratione quidem laudantium minus rem veritatis tenetur, est animi dolorum deleniti fugiat. Eveniet impedit amet aliquid neque quibusdam expedita iure provident inventore modi.</p>

                        <Link href="/" className="inline-block mt-4 px-4 py-2 leading-none border-b-2 rounded text-secondary border-secondary hover:bg-blue-700">
                            Read More
                        </Link>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
                        <Image className="w-full" src={blogs} alt="Image" width={160} height={160} />
                        <div className="font-bold text-xl my-2">Monitixe your skill</div>
                        <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repudiandae quas quam reprehenderit repellat inventore autem ipsa ratione quidem laudantium minus rem veritatis tenetur, est animi dolorum deleniti fugiat. Eveniet impedit amet aliquid neque quibusdam expedita iure provident inventore modi.</p>

                        <Link href="/" className="inline-block mt-4 px-4 py-2 leading-none border-b-2 rounded text-secondary border-secondary hover:bg-blue-700">
                            Read More
                        </Link>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
                        <Image className="w-full" src={blogs} alt="Image" width={160} height={160} />
                        <div className="font-bold text-xl my-2">Monitixe your skill</div>
                        <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repudiandae quas quam reprehenderit repellat inventore autem ipsa ratione quidem laudantium minus rem veritatis tenetur, est animi dolorum deleniti fugiat. Eveniet impedit amet aliquid neque quibusdam expedita iure provident inventore modi.</p>

                        <Link href="/" className="inline-block mt-4 px-4 py-2 leading-none border-b-2 rounded text-secondary border-secondary hover:bg-blue-700">
                            Read More
                        </Link>
                    </div>
                </div>
            </div>

        </div>



    )
}

export default HowitworkSection;
