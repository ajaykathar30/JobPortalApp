import { createSlice } from "@reduxjs/toolkit";
const companySlice=createSlice({
    name:"company",
    initialState:{
        singleCompany:null,
        allCompanies:[],
        searchCompaniesByText:""
    },
    reducers:{
        setSinglecompany:(state,action)=>{
            state.singleCompany=action.payload
    },
        setAllcompanies:(state,action)=>{
            state.allCompanies=action.payload
    },
    
        setSearchCompaniesByText:(state,action)=>{
            state.searchCompaniesByText=action.payload
    }

}
})

export const {setSinglecompany,setAllcompanies,setSearchCompaniesByText}=companySlice.actions
export default companySlice.reducer