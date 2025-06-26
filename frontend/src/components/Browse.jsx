import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constant'
import { useDispatch } from 'react-redux'
import { setAlljobs, setSearchedQuery } from '@/redux/jobSlice'
const returnJobs=[1,2,4]
const Browse = () => {
  const dispatch=useDispatch()
  const {searchedQuery}=useSelector(store=>store.job)
  const {allJobs}=useSelector(store=>store.job)
  useEffect(() => {
    const fetchData=async ()=>{
        try {
          const res=await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,{withCredentials:true})
          dispatch(setAlljobs(res.data.jobs))
          console.log(res.data.jobs)
          dispatch(setSearchedQuery(""))

        } catch (error) {
            console.log(error)
        }
    }
    fetchData()
  }, [])
  
  return (
    <div>
      <Navbar/>
      <div className='m-auto max-w-7xl my-5 '>

      <h1 className='p-2 text-muted-foreground mb-2'>search results({allJobs.length})</h1>
      <div className='grid grid-cols-3 gap-4'>

      {
          allJobs.map((item,idx)=>(
              <Job job={item} key={idx}/>
            ))
        }
        </div>
        </div>
    </div>
  )
}

export default Browse
