import { createSlice } from "@reduxjs/toolkit";
const jobSlice=createSlice({
    name:"job",
    initialState:{
        allJobs:[],
        allAdminJobs:[],
        singleJob:null,
        searchJobsByText:"",
        searchedQuery:""
    },
    reducers:{
        setAlljobs:(state,action)=>{
            state.allJobs=action.payload
        },
        setAllAdminJobs:(state,action)=>{
            state.allAdminJobs=action.payload
        },
        setSinglejob:(state,action)=>{
            state.singleJob=action.payload
        },
           setSearchJobsByText:(state,action)=>{
            state.searchJobsByText=action.payload
        },
        setSearchedQuery:(state,action)=>{
            state.searchedQuery=action.payload
        }



    }

})
export const {setSearchedQuery, setAlljobs,setSinglejob,setAllAdminJobs,setSearchJobsByText}=jobSlice.actions
export default jobSlice.reducer