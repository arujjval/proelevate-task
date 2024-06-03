import React from 'react'
import Image from 'next/image'
import pages from '@/lib/pages'

const Footer = () => {
  return (
    <div className='bg-orange-500 text-white'>
        <div className='flex lg:flex-row gap-6 items-center justify-between w-11/12 lg:max-w-maxContent text-richblack-400 
            leading-6 mx-auto relative py-14'>

            <div className='border-b border-orange-400 w-[100%] flex flex-col flex-wrap sm:flex-row pb-5 items-start 
                justify-center gap-6'>
                <div className='flex flex-col gap-3'>
                    <Image 
                        src={'https://www.proelevate.in/assets/Common/FooterLogo.svg'} 
                        width={224} 
                        height={40} 
                        alt='logo'
                    />
                    <p>
                        Join Our Community: Connect with like-minded individuals and grow your network.
                    </p>
                </div>

                <div className='flex flex-col sm:flex-row justify-between pl-3 lg:pl-5 gap-x-9 gap-y-8 flex-wrap'>
                    <div className='flex flex-col gap-4'>
                        <h2 className='font-semibold'>ProElevate's </h2>
                        <ul className='flex flex-col gap-2 text-sm'>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='font-semibold'>Useful Links</h2>
                        <ul className='flex flex-col gap-2 text-sm'>
                            {pages.map((page) => 
                                <li>
                                    <a href='/' className="text-sm text-center">
                                        {page}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div>
                        <div className='flex flex-col gap-4'>
                            <h2 className='font-semibold'>Follow us on</h2>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h2 className='font-semibold'>Contact Us</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='pb-4'>
            <p className='text-center text-sm font-semibold py-4 px-10'>
                Copyright © 2024 ProElevate - All Rights Reserved
            </p>
        </div>
    </div>
  )
}

export default Footer