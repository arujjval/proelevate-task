'use client';
import React from 'react'
import events from '@/lib/events'
import { usePathname } from 'next/navigation';

const page = () => {
  const path = usePathname()
  const id = path.substring(1)
  const event = events.find((event) => event.id == id)

  return (
    <div className='flex flex-col gap-8 max-w-[800px] w-full px-10 md:px-20 justify-center pb-20 pt-10'>
        <h2 className='font-bold text-4xl'>{event.name}</h2>
        
        <div className='rounded-xl border border-gray-100 p-5'>
            <h1 className='font-bold text-lg'>Description</h1>
            <p>{event.description}</p>
        </div>

        <div className='rounded-xl border border-gray-100 p-5'>
            <h1 className='font-bold text-lg'>Submission DeadLine</h1>
            <p>{event.deadline}</p>
        </div>
    </div>
  )
}

export default page