'use client'
import React, {useState} from 'react'
import events from '@/lib/events'
import { useRouter } from 'next/navigation';

const page = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [deadline, setDeadline] = useState('')
    const [category, setCategory] = useState('')
    const categories = ['Web Development', 'Blockchain', 'Machine Learning', 'Data Structures',
         'Mobile Development']
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(category === '' || name === '') {
            alert('Please fill name and category field')
            return
        }
        else{
            const event = {
                id: events.length,
                name: name,
                description: description,
                deadline: deadline,
                type: category
            }
            events.push(event)
            router.push('/')
        }  
    }

  return (
    <div className='flex flex-col gap-10 max-w-[800px] w-full px-10 md:px-20 justify-center pb-20 pt-10'>
        <h2 className='font-bold text-4xl'>Create Event</h2>

        <form className='flex flex-col w-full gap-14' onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <label className='font-bold text-lg'>Event Name</label>
                <input 
                    className='peer px-2 py-1 bg-transparent border border-blue-gray-400 rounded-sm' 
                    type="text" name="name" value={name} 
                    onChange={(e) => {setName(e.target.value)}} autoComplete='off'/>
            </div>

            <div className='flex flex-col'>
                <label className='font-bold text-lg'>Event Description</label>
                <textarea 
                    className='peer px-2 py-1 bg-transparent border border-blue-gray-400 rounded-sm'
                    type="text" name="description" value={description} 
                    onChange={(e) => {setDescription(e.target.value)}} autoComplete='off'/>
            </div>

            <div className='flex flex-col'>
                <label className='font-bold text-lg'>Submission Deadline</label>
                <input 
                    className='peer px-2 py-1 bg-transparent border border-blue-gray-400 rounded-sm'
                    type='date' name="deadline" value={deadline} 
                    onChange={(e) => {setDeadline(e.target.value)}}/>
            </div>

            <div className='flex flex-col'>
                <label className='font-bold text-lg'>Category</label>
                <select 
                    className='peer px-2 py-1 bg-transparent border border-blue-gray-400 rounded-sm'
                    name="category" value={category} 
                    onChange={(e) => {setCategory(e.target.value)}}>
                    <option value=''>Select Category</option>
                    {categories.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select> 
            </div>

            <button 
                className='px-5 inline w-40 h-10 rounded-full py-3 text-sm font-medium
                leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent
                bg-orange-500 hover:bg-red-700' 
                type="submit">
                    Submit
            </button>
        </form>
    </div>
  )
}

export default page