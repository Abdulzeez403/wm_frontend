import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import Logo from "../public/assests/Logo.png"

interface IProp {
    children: React.ReactNode;
}

export const HomeLayout = ({ children }: IProp) => {

    return (
        <div>

            <div className='flex justify-between items-center py-4 bg-primary px-2  lg:px-20'>
                <div>
                    <Image src={Logo} alt="logo" width={150} height={150} />
                </div>
                <div className=" hidden gap-x-4 items-center text-white lg:flex">
                    <Link href="/career" className=' text-[20px]'>Career</Link>
                    <Link href="/career" className='text-[20px]'>Blog</Link>
                    <Link href="/career" className='text-[20px]'>FAQ</Link>
                </div>

                <div className='flex gap-x-2 items-center'>
                    <button className=' border-2 rounded-lg border-secondary p-2 text-white px-4 text-lg '>Sign In</button>
                    <button className=' border-2 rounded-lg border-secondary py-2 text-white  text-lg px-4 bg-secondary'>Register</button>
                </div>
            </div>

            {children}
        </div>

    )
}

export default HomeLayout
