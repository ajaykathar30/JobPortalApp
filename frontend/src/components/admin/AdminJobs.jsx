import React from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import {useNavigate} from 'react-router-dom'

import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import AdminJobstable from './AdminJobstable'
import useGetAllAdminJobs from '../hooks/useGetAllAdminJobs'
import { setSearchJobsByText } from '@/redux/jobSlice'
const AdminJobs = () => {
   const dispatch=useDispatch()
    const navigate =useNavigate()
  useGetAllAdminJobs()
    const [input, setinput] = useState("")
  useEffect(() => {
    dispatch(setSearchJobsByText(input))
  }, [input])
  
  return (
    
   <>
   <Navbar/>
   <div className='w-6xl mx-auto my-5 '>
    <h1 className='text-5xl font-bold mb-6'>Your Posted Jobs</h1>
        <div className='flex items-center justify-between'>
            <input type="text" placeholder='Filter jobs by role' value={input} onChange={(e)=>setinput(e.target.value)} className='w-fit p-2 border-1  rounded-2xl'/>

            <Button onClick={()=>navigate("/admin/jobs/create")}>Post job</Button>
        </div>
        <AdminJobstable/>
   </div>
   </>
  )
}

export default AdminJobs
