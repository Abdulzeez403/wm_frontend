import React from 'react'
import Image from "next/image"
import User from "../../../public/assests/blog.png"
import instructors from "../../../public/assests/instructor.png"
import analytics from "../../../public/assests/analytics.png"
import brand from "../../../public/assests/brands.png"
import { MdDashboardCustomize } from "react-icons/md";
import { IoEarthOutline } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";

export const Testimonial = () => {
    return (

        <div>


            <div className='px-80 py-12'>
                <div>
                    <h3 className='text-center font-semibold'>Testimonial</h3>

                    <h1 className='text-center text-[2.3rem] font-semibold pb-4'>What Our User Are Saying</h1>

                </div>
                <div className='flex justify-center bg-[#8EEDDB] p-10 rounded-lg '>

                    <div className='flex gap-x-8 '>
                        <div className='border-2 rounded-lg w-[33%] p-4 bg-white'>
                            <p className="py-2 font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam enim, perferendis temporibus iure optio voluptates sapiente et natus veritatis alias tempora.</p>

                            <div className='flex gap-x-2 items-center pt-10'>
                                <div className='rounded-full'>
                                    <Image src={User} alt="image" width={50} height={50} className="rounded-full" />
                                </div>
                                <h4>Sodiq</h4>
                            </div>

                        </div>

                        <div className='border-2 rounded-md w-[33%] p-4 bg-white'>
                            <p className="py-2 font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam enim, perferendis temporibus iure optio voluptates sapiente et natus veritatis alias tempora.</p>

                            <div className='flex gap-x-2 items-center pt-10'>
                                <div className='rounded-full'>
                                    <Image src={User} alt="image" width={50} height={50} className="rounded-full" />
                                </div>
                                <h4>Sodiq</h4>
                            </div>

                        </div>

                        <div className='border-2 rounded-md w-[33%] p-4 bg-white'>
                            <p className="py-2 font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam enim, perferendis temporibus iure optio voluptates sapiente et natus veritatis alias tempora.</p>

                            <div className='flex gap-x-2 items-center pt-10'>
                                <div className='rounded-full'>
                                    <Image src={User} alt="image" width={50} height={50} className="rounded-full" />
                                </div>
                                <h4>Sodiq</h4>
                            </div>

                        </div>
                    </div>




                </div>

            </div>

            <div className='py-10 '>
                <div className='flex justify-between items-center bg-black  px-60'>
                    <div className='w-[20rem] '>
                        <h4 className='text-white font-bold 
                        text-[2rem] '>Monetise
                            your skills</h4>
                        <p className='text-white '>Whether you re a seasoned pro or gaining experience, share your skills on Walkmetru.</p>
                        <button className='bg-secondary p-2 rounded-md px-6 text-teritory font-semibold mt-4'> Explore 1-on-1 Class</button>
                    </div>
                    <div>
                        <Image src={instructors} alt="image" width={600} height={600} />
                    </div>
                </div>
            </div>


            <div className='py-5 '>
                <div className='flex justify-between items-center px-60'>

                    <div>
                        <Image src={analytics} alt="image" width={500} height={500} />
                    </div>

                    <div className='w-[30rem] '>
                        <h4 className=' font-bold 
                        text-[2.8rem] '>Anyone can share their skills and experience</h4>
                        <p className='w-[30rem]  '>Full-time worker or consultant? 2 years or 10 years of experience ? Walkmetru opens doors to side gig opportunities. Monetize your experience and start receiving bookings..</p>
                        <div className='flex justify-between items-center'>

                            <button className='bg-secondary p-2 rounded-md px-6 text-teritory font-semibold mt-4'> Create Your Profile Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-black py-10 px-80 '>
                <h4 className='text-white  py-4  text-[2.3rem] w-[40rem] pb-4'>
                    Unlock a world of opportunities by sharing your Walkmetru class on Social Media
                </h4>

                <div className='flex justify-center items-center'>


                    <div className='flex gap-x-20 items-center'>

                        <div className='border-r-2  w-[28%] py-2 pr-8 '>
                            <MdDashboardCustomize color="green" size={20} />
                            <h4 className='font-bold text-white py-4'>Create Your Class</h4>
                            <p className="text-white w-[13rem] pt-6 text-sm">Craft an engaging class on Walkmetru, showcasing your expertise and unique skills.</p>
                        </div>

                        <div className='border-r-2  w-[30%] py-2 pr-2 '>
                            <IoEarthOutline color="green" size={20} />
                            <h4 className='font-bold text-white py-4 w-[20rem]'>
                                Share the Link on Social Media</h4>
                            <p className="text-white w-[13rem] pt-6 text-sm">Boost your audience and bookings—share the link to your class on Social Media..</p>
                        </div>

                        <div className=' w-[25%] py-2 pr-2 '>
                            <FaDatabase color="green" size={20} />
                            <h4 className='font-bold text-white py-4'>Maximize Earnings</h4>
                            <p className="text-white w-[13rem] pt-6 text-sm">Witness a surge in bookings and earnings as your Social Media network discovers and signs up for your exclusive class.</p>
                        </div>



                    </div>
                </div>

                <div className="flex justify-center pt-10 ">

                    <div className='w-[30rem]  '>
                        <h4 className=' font-bold 
                        text-[20px] text-center text-white '>Create your 1-on-1 class and share on Social Media for your audience </h4>
                        <div className="flex justify-center ">

                            <button className='bg-secondary p-2 rounded-md px-6 text-teritory font-semibold mt-4'> Create 1-on-1 class</button>
                        </div>
                    </div>
                </div>



            </div>


            <div className='px-80 py-12'>
                <div>

                    <h1 className='text-center text-[2.3rem] font-semibold pb-4'>What people have to say</h1>
                    <h3 className='text-center font-semibold py-2 '>Our users work with some of the companies you know. They learn and gain insights with walkmetru, they share
                        their expertise over a live 1-to-1 call here at walkmetru.</h3>
                    <div className='py-4'>
                        <Image src={brand} alt="brand" width={1050} height={1050} />
                    </div>



                </div>
                <div className='flex justify-center bg-[#8EEDDB] p-10 rounded-lg '>

                    <div className='flex gap-x-8 '>
                        <div className='border-2 rounded-lg w-[33%] p-4 bg-white'>
                            <p className="py-2 font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam enim, perferendis temporibus iure optio voluptates sapiente et natus veritatis alias tempora.</p>

                            <div className='flex gap-x-2 items-center pt-10'>
                                <div className='rounded-full'>
                                    <Image src={User} alt="image" width={50} height={50} className="rounded-full" />
                                </div>
                                <h4>Sodiq</h4>
                            </div>

                        </div>

                        <div className='border-2 rounded-md w-[33%] p-4 bg-white'>
                            <p className="py-2 font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam enim, perferendis temporibus iure optio voluptates sapiente et natus veritatis alias tempora.</p>

                            <div className='flex gap-x-2 items-center pt-10'>
                                <div className='rounded-full'>
                                    <Image src={User} alt="image" width={50} height={50} className="rounded-full" />
                                </div>
                                <h4>Sodiq</h4>
                            </div>

                        </div>

                        <div className='border-2 rounded-md w-[33%] p-4 bg-white'>
                            <p className="py-2 font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam enim, perferendis temporibus iure optio voluptates sapiente et natus veritatis alias tempora.</p>

                            <div className='flex gap-x-2 items-center pt-10'>
                                <div className='rounded-full'>
                                    <Image src={User} alt="image" width={50} height={50} className="rounded-full" />
                                </div>
                                <h4>Sodiq</h4>
                            </div>

                        </div>
                    </div>




                </div>

            </div>

        </div>
    )
}

