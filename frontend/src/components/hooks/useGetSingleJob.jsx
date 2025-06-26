// import { setAlljobs } from "@/redux/jobSlice"
// import { JOB_API_END_POINT } from "@/utils/constant"
// import axios from "axios"
// import { useEffect } from "react"
// import { useState } from "react"
// import { useDispatch } from "react-redux"


// const useGetSingleJob = (id) => {
//   const dispatch=useDispatch()
// const [jobs, setjobs] = useState([])
// useEffect(() => {
//   const fetchData=async ()=>{
//   try {

//       const res=await axios.get(`${JOB_API_END_POINT}/get/${id}`,{withCredentials:true})
//       if(res.data.success){
//           dispatch(setAlljobs(res.data.jobs))
//       }
//       const Job=await res.data.jobs
//       setjobs(Job)
//       console.log(Job)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   fetchData()
  
  
  
// }, [])
// }

// export default useGetSingleJob
