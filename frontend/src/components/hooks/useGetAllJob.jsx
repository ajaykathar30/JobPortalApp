import { setAlljobs } from "@/redux/jobSlice"
import { JOB_API_END_POINT } from "@/utils/constant"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"


const useGetAllJob = () => {
  const dispatch=useDispatch()
const [jobs, setjobs] = useState([])
useEffect(() => {
  const fetchData=async ()=>{
  try {

      const res=await axios.get(`${JOB_API_END_POINT}/get`,{withCredentials:true})
      if(res.data.success){
          dispatch(setAlljobs(res.data.jobs))
      }
      // const JobArray=await res.data.jobs
      // setjobs(JobArray)
      // console.log(JobArray)
    } catch (error) {
      console.log(error)
    }
  }
  fetchData()
  
  
  
}, [])
}

export default useGetAllJob
