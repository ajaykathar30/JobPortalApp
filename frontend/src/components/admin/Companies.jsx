import React from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import {useNavigate} from 'react-router-dom'
import useGetAllCompanies from '../hooks/useGetAllCompanies'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchCompaniesByText } from '@/redux/companySlice'
const Companies = () => {
   const dispatch=useDispatch()
    const navigate =useNavigate()
    useGetAllCompanies()
    const [input, setinput] = useState("")
  useEffect(() => {
    dispatch(setSearchCompaniesByText(input ))
  }, [input])
  
  return (
    
   <>
   <Navbar/>
   <div className='w-6xl mx-auto my-10 '>
    <h1 className='text-5xl font-bold mb-6'>Your Registered Companies </h1>
        <div className='flex items-center justify-between'>
            <input type="text" placeholder='Filter by name' value={input} onChange={(e)=>setinput(e.target.value)} className='w-fit p-2 border-1 border-gray-300 rounded-2xl'/>


            <Button onClick={()=>navigate("/admin/companies/create")}>New Company </Button>
        </div>
        <CompaniesTable/>
   </div>
   </>
  )
}

export default Companies
