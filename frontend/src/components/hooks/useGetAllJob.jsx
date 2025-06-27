import { setAlljobs } from "@/redux/jobSlice"
import { JOB_API_END_POINT } from "@/utils/constant"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"


const useGetAllJob = () => {
  const dispatch=useDispatch()

useEffect(() => {
  const fetchData=async ()=>{
  try {

      const res=await axios.get(`${JOB_API_END_POINT}/get`,{withCredentials:true})
      if(res.data.success){
          dispatch(setAlljobs(res.data.jobs))
      }
     
    } catch (error) {
      console.log(error)
    }
  }
  fetchData()
  
  
  
}, [])
}

export default useGetAllJob
