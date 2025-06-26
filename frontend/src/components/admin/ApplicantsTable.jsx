import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverTrigger,PopoverContent } from '../ui/popover'
import { MoreHorizontalIcon } from 'lucide-react'
import { useSelector } from 'react-redux'
import { APPLICATION_API_END_POINT } from '@/utils/constant'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import axios from 'axios'
const shortListingStatus=["accepted","rejected"]
const ApplicantsTable = () => {
  const statusHandler=async (status,id)=>{
    try {
      axios.defaults.withCredentials=true
        const res=await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`,{status})
        if(res.data.success){
          toast.success(res.data.message)
        }
    } catch (error) {
      console.log(error)
    }
  }
  const {allApplicants}=useSelector(store=>store.application)
  return (
    <div>
      <Table>
         <TableCaption>A list of your job applicants </TableCaption>
         <TableHeader>
            <TableRow>
                  <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Resume</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Action</TableHead>
            </TableRow>
         </TableHeader>
         <TableBody>
          {
            allApplicants.length>0 && allApplicants?.applications?.map((job,idx)=>(
            
            <TableRow key={job?._id}>
                <TableCell>{job?.applicant?.name}</TableCell>
                <TableCell>{job?.applicant?.email}</TableCell>
                <TableCell>{job?.applicant?.phoneNumber}</TableCell>
                <TableCell><a href={job?.applicant?.profile?.resume}>{job?.applicant?.profile?.resumeOriginalName|| "N/A"}</a></TableCell>
                <TableCell>{job?.applicant?.createdAt.split('T')[0]}</TableCell>
                <TableCell>
            <Popover>
                <PopoverTrigger>
                    <MoreHorizontalIcon/>
                </PopoverTrigger>
                <PopoverContent className='w-fit border-1 bg-amber-50 rounded'>
                        {shortListingStatus.map((item,idx)=>(
                            <p key={idx} onClick={()=>statusHandler(item,job?._id)} className='my-1 p-2 cursor-pointer'>{item}</p>
                        ))}
                </PopoverContent>
            </Popover>
                </TableCell>
            </TableRow>
            ))
          }
         </TableBody>
      </Table>
      <ToastContainer autoClose={1200} theme="dark"/>
    </div>
  )
}

export default ApplicantsTable
