'use client'
import React from 'react'
import Image from 'next/image'
import pages from '@/lib/pages'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Menu from '@/lib/menu'

const Topbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const route = useRouter()

  return (
    <div className='w-screen h-24 px-5 flex flex-row items-center'>
        <div className='w-full flex flex-row justify-evenly items-center'>
          <div className=''>
            <Image 
              src={'https://www.proelevate.in/assets/Common/Logo.svg'} 
              alt='logo' width={192}
              height={36}  
            />
          </div>
          <div className='md:hidden flex justify-center items-center'>
            <button className='flex flex-col gap-1 justify-center items-center relative z-50' onClick={()=>setShowMenu(!showMenu)}>
              <span className="bg-gray-600 block h-1 w-6 rounded-sm transition-all duration-300 ease-out
              -translate-y-0.5"></span>
              <span className="bg-gray-600 block h-1 w-6 rounded-sm transition-all duration-300 ease-out
              -translate-y-0.5"></span>
              <span className="bg-gray-600 block h-1 w-6 rounded-sm transition-all duration-300 ease-out
              -translate-y-0.5"></span>
            </button>
          </div>
          <div className={showMenu?`fixed w-screen h-screen items-start pt-5 z-[100] top-0 bg-gray-50 px-5 flex flex-col gap-4 
            lg:max-w-maxScreen mx-auto transition-all duration-500` : 'hidden'}>
            <button onClick={()=>setShowMenu(!showMenu)}>
              <Menu />
            </button>
            <ul className='flex flex-col'>
              {pages.map((page, index) => 
                  <li className='py-4' key={index}>
                    <a className="text-gray-500 hover:text-orange-500 text-center py-2 px-4">
                      {page}
                    </a>
                  </li>
              )}
            </ul>
          </div>
          <div className='hidden md:block'>
            <ul data-orientation='horizontal' className='group flex flex-1 list-none items-center justify-center space-x-1'>
              {pages.map((page, index) => 
                <li key={index}>
                  <a className="text-gray-500 text-sm hover:text-orange-500 text-center py-2 px-4 font-medium">
                    {page}
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div className='bg-orange-500 px-4 py-2 rounded-full text-white hover:bg-red-600 ease-in-out duration-300 
            hidden md:block'>
              <button onClick={() => route.push('/create-event')}>
                Create Event
              </button>
          </div>
        </div>
    </div>
  )
}

export default Topbar