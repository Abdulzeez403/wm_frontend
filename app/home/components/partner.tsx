import React from 'react'
import Image from "next/image"
import Notion from "../../../public/assests/notion.png"
import MicroSoft from "../../../public/assests/microsoft.png"
import AWS from "../../../public/assests/aws.png"
import shape1 from "../../../public/assests/shape.png"
import shape from "../../../public/assests/shape (1).png"
import Logo from "../../../public/assests/Logo.png"
import ios from "../../../public/assests/IOS.png"
import Link from 'next/link'
import { RiTwitterXFill } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";

export const PartnerSection = () => {
    return (
        <div>
            {/* panter */}
            <div className='px-80 py-10'>
                <div >
                    <h4 className='font-bold text-[2.8rem] pt-10 text-center'>Partner</h4>
                </div>
                <div className='flex gap-x-20 justify-center items-center py-10'>
                    <Image src={Notion} alt="image" width={130} height={130} />
                    <Image src={AWS} alt="image" width={120} height={120} />
                    <Image src={MicroSoft} alt="image" width={130} height={130} />
                </div>
            </div>


            <div className='bg-black py-10'>
                <div className=' px-80 py-20 '>
                    <div className='bg-primary border rounded-lg w-full md:w-98 py-24 relative '>
                        <h4 className='text-center font-bold text-white text-[2.5rem] py-8'>Subscribe to Our Newsletter</h4>
                        <div className='flex justify-center'>
                            <form className='flex flex-col md:flex-row gap-2 items-center'>
                                <input type="text" placeholder='First Name' className='p-2 bg-primary text-white border rounded-md px-4' />
                                <input type="text" placeholder='Enter Email' className='p-2 bg-primary text-white border rounded-md px-4' />
                                <button className='bg-secondary text-white font-bold p-2 border rounded-md'>Subscribe Now</button>
                            </form>
                        </div>
                        <div className='absolute bottom-0 right-0 '>

                            <Image src={shape1} alt="Decorative Shape Top Left" width={120} height={120} />
                        </div>
                        <div className='absolute top-0 left-0'>
                            <Image src={shape} alt="Decorative Shape Bottom Right" width={120} height={120} />
                        </div>
                    </div>
                </div>


                {/* footer */}

                <div className='px-80'>
                    <div className='flex justify-between'>

                        <div>
                            <div>
                                <Image src={Logo} alt="image" width={120} height={120} />
                                <h4 className='text-white w-52 py-8 text-sm'>Start Learning with 1-on-1 experience
                                    Share your knowledge with others and earn</h4>

                                <div className='flex gap-x-2 items-center'>
                                    <Image src={ios} alt="image" width={130} height={130} />
                                    <Image src={ios} alt="image" width={130} height={130} />
                                </div>

                                <div className='pt-5 flex gap-x-2'>
                                    <div className='border border-white rounded-full w-8 h-8 flex items-center justify-center'>
                                        <Link href="/">
                                            <RiTwitterXFill color="green" size={15} />
                                        </Link>
                                    </div>
                                    <div className='border border-white rounded-full w-8 h-8 flex items-center justify-center'>
                                        <Link href="/">
                                            <CiInstagram color="green" size={15} />
                                        </Link>
                                    </div>
                                    <div className='border border-white rounded-full w-8 h-8 flex items-center justify-center'>
                                        <Link href="/">
                                            <SlSocialLinkedin color="green" size={15} />
                                        </Link>
                                    </div>
                                    <div className='border border-white rounded-full w-8 h-8 flex items-center justify-center'>
                                        <Link href="/">
                                            <SlSocialFacebook color="green" size={15} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-secondary py-2 text-lg font-bold'>About Us</h3>
                            <div className=''>
                                <div className='py-2 '>
                                    <Link href="/" className='text-slate-400'>Career</Link>

                                </div>
                                <div className='py-2 '>
                                    <Link href="/" className='text-slate-400'>Blog</Link>
                                </div>

                                <div className='py-2 '>
                                    <Link href="/" className='text-slate-400'>Contact Us</Link>
                                </div>
                                <div className='py-2 '>
                                    <Link href="/" className='text-slate-400'>Partnership</Link>
                                </div>
                                <div className='py-2 '>
                                    <Link href="/" className='text-slate-400'>Testimonies</Link>
                                </div>


                            </div>


                        </div>

                        <div className='w-32'>
                            <h3 className='text-secondary py-2 text-lg font-bold'>Admin</h3>
                            <div className=''>
                                <div className='py-2 '>
                                    <Link href="/" className='text-slate-400'> Payment and Refund Policy</Link>

                                </div>
                                <div className='py-2 '>
                                    <Link href="/" className='text-slate-400'>
                                        Privacy Policy
                                    </Link>
                                </div>

                                <div className='py-2 '>
                                    <Link href="/" className='text-slate-400'> Terms & Condition</Link>
                                </div>
                                <div className='py-2 '>
                                    <Link href="/" className='text-slate-400'>Cookies Policy</Link>
                                </div>

                            </div>


                        </div>

                        <div className='w-32'>
                            <h3 className='text-secondary py-2 text-lg font-bold'>Help</h3>
                            <div className=''>
                                <div className='py-2 '>
                                    <Link href="/" className='text-slate-400'>Customer Support</Link>

                                </div>
                                <div className='py-2 '>
                                    <Link href="/" className='text-slate-400'>
                                        FAQ
                                    </Link>
                                </div>

                                <div className='py-2 '>
                                    <Link href="/" className='text-slate-400'>
                                        Account Help
                                    </Link>
                                </div>
                                <div className='py-2 '>
                                    <Link href="/" className='text-slate-400'>Feedback</Link>
                                </div>



                            </div>


                        </div>
                    </div>



                    <div className=''>
                        <h4 className='text-secondary text-center py-6 w-42 '>© Copyright 2024, All Rights Reserved <br /> by Walkmetru</h4>
                    </div>
                </div>
            </div>


        </div>

    )
}

