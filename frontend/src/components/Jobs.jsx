import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job'
import FilterCard from './FilterCard'
import { Filter } from 'lucide-react'
import Timepass from './Timepass'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constant'
import {motion} from "framer-motion"

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector(store => store.job)
  const [filteredJobs, setfilteredJobs] = useState(allJobs)
  useEffect(() => {
    if (searchedQuery) {
      const relavantJobs = allJobs.filter((job, idx) => {
        return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) || job.location.toLowerCase().includes(searchedQuery.toLowerCase()) || job.description.toLowerCase().includes(searchedQuery.toLowerCase())
      })
      setfilteredJobs(relavantJobs)
    }
    else {
      setfilteredJobs(allJobs)
    }

  }, [allJobs, searchedQuery])


  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto mt-5 '>
        <div className='flex gap-5'>
          <div className='w-20% p-1 rounded '>

            <FilterCard />
          </div>
          {
            filteredJobs.length <= 0 ? <span>Job not found</span> :

              <div className='flex-1 h-[88vh]  overflow-y-auto pb-3 '>
                <div className='grid grid-cols-3 gap-5'>
                  {
                    filteredJobs.map((job) => (
                      <motion.div initial={{opacity:0,x:100 }} 
                      animate={{opacity:1,x:0}}  exit={{opacity:0,x:-100}}
                        transition={{duration:0.3}}>
                       
                        <Job key={job._id} job={job} />
                      </motion.div>
                    ))

                  }
                  <Job />
                </div>

              </div>
          }
        </div>
      </div>



    </div>
  )
}

export default Jobs
