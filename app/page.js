'use client';
import React, {useState} from 'react'
import events from '@/lib/events'
import { useRouter } from 'next/navigation';


const page = () => {
  const [filter, setFilter] = useState('All')
  const [showCategories, setShowCategories] = useState(false)
  const filters = ['All', 'Web Development', 'Blockchain', 'Machine Learning', 'Data Structures',
         'Mobile Development']
  const router = useRouter()

  const showDesc = (data) => {
    router.push('/'+data.id)
    console.log(router.query)
  }

  return (
    <div className='w-full max-w-[1200px] justify-center gap-10 px-20 md:px-10 flex flex-row pt-16 pb-36'>
        {showCategories && 
          <button onClick={() => setShowCategories(false)}>
            <div className='fixed inset-0 z-[1000] min-h-screen !mt-0 flex justify-center items-center overflow-auto
               bg-black bg-opacity-30 xl:hidden'>
                <div className='w-11/12 sm:max-w-[550px] h-auto py-5 flex flex-col justify-between rounded-xl border
                   border-gray-100 bg-white'>
                  Categories
                  <div className='pt-0 flex flex-wrap !p-4 gap-3 items-start self-stretch content-start'>
                      {filters.map((item, index) => (
                        <button key={index} onClick={() => setFilter(item)} 
                              className={`px-4 py-2 col-span-auto text-sm rounded-full w-fit ease-in-out duration-300  
                              ${filter === item ? 'bg-orange-500 text-white' 
                              : 'bg-gray-100 text-gray-800 hover:bg-gray-400 hover:text-white'}`}>
                          {item}
                        </button>
                      ))}
                  </div>
                </div>
            </div>
          </button>
        }

        <div className='md:flex flex-col items-center gap-4 mt-4 border border-gray-200
          rounded-xl max-w-96 h-fit hidden'>
          <div className='font-semibold bg-gray-200 w-full text-center py-4 rounded-t-xl hidden md:block'>
            <p className='font-bold text-lg'>Categories</p>
          </div>
          <div className='pt-0 flex flex-wrap !p-4 gap-3 items-start self-stretch content-start'>
            {filters.map((item, index) => (
              <button key={index} onClick={() => setFilter(item)} 
                    className={`px-4 py-2 col-span-auto text-sm rounded-full w-fit ease-in-out duration-300  
                    ${filter === item ? 'bg-orange-500 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-400 hover:text-white'}`}>
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-4 w-full'>
          <div className='flex flex-row justify-between text-3xl font-semibold text-start w-full'>
            <div>
              Events
            </div>
            <div className='md:hidden'>
              <button onClick={() => setShowCategories(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" class="w-4 h-4 stroke-gray-600 stroke-2"><path d="m2.755 3.733 3.904 4.6.008 3 2.666 2 .008-5 3.904-4.6a.666.666 0 0 0-.536-1.066H3.29a.667.667 0 0 0-.536 1.066"></path></svg>
              </button>
            </div>
          </div>

          {events.map((event, index) => ( 
            (filter === 'All' || filter === event.type) &&
              <button onClick={() => showDesc(event)} 
                  className='hover:scale-105 ease-in-out duration-300'>
                  <div key={index} className='flex flex-col gap-2 bg-gray-100 rounded-md py-6 items-center px-4'>
                    <div className='font-semibold text-lg'>
                      {event.name}
                    </div>
                    <div className='text-sm bg-gray-200 text-gray-600 py-1 rounded-xl max-w-fit px-2'>
                      {event.type}
                    </div>
                  </div>
              </button>
            ))}
        </div>
    </div>
  )
}

export default page