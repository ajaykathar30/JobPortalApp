import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar,AvatarImage } from './ui/avatar'
import { Badge } from "@/components/ui/badge";
import {useNavigate} from "react-router-dom"
import { PinIcon } from 'lucide-react';
import { MapPinCheck } from 'lucide-react';
import { MapPin } from 'lucide-react';
// import { AvatarImage } from '@radix-ui/react-avatar'
// const JobId="qrefsvxf3wrsdfb"
const Job = ({job}) => {
  const daysAgo=(mongodbTime)=>{
    const createdAt=new Date(mongodbTime)
    const currTime=new Date()
    const timeDiff=currTime-createdAt
    return Math.floor(timeDiff/(24*60*60*1000))
  }
  const diff=daysAgo(job?.createdAt)
  const navigate=useNavigate()
  return (
    <div className='border shadow-md px-5 py-1 rounded-xl bg-gray-100 hover:shadow-xl'>
        <div className='flex justify-between items-center'>

     <p>{
   
            diff==='0'?"Today":`${diff} days ago`
     } </p>
     <Button variant='outline' className='rounded-full' size='icon'><Bookmark/></Button>
        </div>
     <div className='flex gap-2 items-center'>
    <Button size='icon' variant='outline' >
        <Avatar>
            <AvatarImage src={job?.company?.logo ||"/cl.png"}/>
        </Avatar>
     </Button>
     <div className='p-2'>
        <h1 className='font-poppins text-xl'>{job?.company?.name}</h1>

        
        <p className='font-poppins text-muted-foreground text-sm'>{job?.location}</p>

     </div>
     </div>
     <div>
        <p className='font-bold p-3'>{job?.title}</p>
        <p className='text-muted-foreground'>{job?.description}</p>
     </div>
    <div className='flex gap-2 my-5 font-poppins'>
        <Badge className='text- bg-emerald-400 text-white '>{job?.vacancy} POSITIONS</Badge>
            <Badge className='text- bg-sky-500 text-white'>{job?.jobType}</Badge>
            <Badge className='text- bg-green-600 text-white'>{job?.salary} LPA</Badge>
    </div>
        <div className='flex gap-2 my-3'>
        <Button variant='outline'  onClick={()=>navigate(`/description/${job._id}`) }>Details</Button>
        <Button>Save for later</Button>
    </div>
    </div>
  )
}

export default Job
