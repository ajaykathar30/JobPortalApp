import { setAllcompanies } from "@/redux/companySlice"
import { COMPANY_API_END_POINT } from "@/utils/constant"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"


const useGetAllCompanies = () => {
    const dispatch=useDispatch()
useEffect(() => {
const fetchData=async ()=>{

    try {
        const res=await axios.get(`${COMPANY_API_END_POINT}/get`,{withCredentials:true})
        if(res.data.success){
                dispatch(setAllcompanies(res.data.companies))
                // console.log(res.data.companies)
        }
        
    } catch (error) {
        console.log(error)
        // toast.error(error.response.data.message)
    }
}
fetchData()
}, [])

}

export default useGetAllCompanies
