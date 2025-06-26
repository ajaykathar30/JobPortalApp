import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'
import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'
import { Badge } from "@/components/ui/badge";
import { MapPin } from 'lucide-react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import { useState } from 'react'
import { useEffect } from 'react'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setAlljobs } from '@/redux/jobSlice'
import {Link} from 'react-router-dom'


const JobCards = ({job}) => {
   

  // const [first, setfirst] = useState(second)
  return (
//     <CardContainer className="inter-var w-full max-w-sm">
//       <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//         <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-white"
//         >
//           Campany Name
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//         >
//           India
//         </CardItem>
//         {/* <CardItem translateZ="100" className="w-full mt-4">
//           <img
//             src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             height="1000"
//             width="1000"
//             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="thumbnail"
//           /> */}
//         {/* </CardItem> */}
//          <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-white"
//         >
//           Job Title
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//         >
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet explicabo quod non cupiditate impedit!
//         </CardItem>
//         <div className="flex justify-left items-center mt-5">
//           {/* <CardItem
//             translateZ={20}
//             as="a"
//             href="https://twitter.com/mannupaaji"
//             target="__blank"
//             className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//           >
//             Try now →
//           </CardItem>
//           <CardItem
//             translateZ={20}
//             as="button"
//             className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//           >
//             Sign up
//           </CardItem> */}
//           <Badge className='text- bg-emerald-400 text-white'>Positions</Badge>
// //             <Badge className='text- bg-sky-500 text-white'>Job Type</Badge>
// //             <Badge className='text- bg-green-600 text-white'>24LPA</Badge>
//         </div>
//       </CardBody>
//     </CardContainer>
  
    <Link to={`/description/${job._id}`} className='w-full   max-w-sm shadow-sm p-3 rounded-xl hover:shadow-xl cursor-pointer bg-gray-50'>
        <h1 className='text-xl '>{job?.company?.name}</h1>
        <div className='flex justify-start items-center gap-1 p-2'>
<MapPin className='text-muted-foreground'/>
        <p className='text-muted-foreground'>{job?.location}</p>
        </div>
        <div >
            <h1 className='text-md font-bold p-1 font-poppins'>{job.title}</h1>
            <p className='p-2 text-muted-foreground font-poppins text-sm'>{job.description} </p>
            <div className="flex w-full flex-wrap gap-2 my-2">
            <Badge className='text- bg-emerald-400 text-white'>{job.vacancy} POSITIONS</Badge>
            <Badge className='text- bg-sky-500 text-white'>{job.jobType}</Badge>
            <Badge className='text- bg-green-600 text-white'>{job.salary}LPA</Badge>
      </div>

        </div>
      
    </Link>
  )
}

export default JobCards
