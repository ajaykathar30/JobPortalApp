import React from 'react'
import Job from './Job'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import { Button } from './ui/button'



const filterData=[
    {
        filterType:'Location',
        array:['Mumbai','Bangalore','Hyderabad','Pune','Delhi']
    },
    {
        filterType:'Industry',
        array:['frontend','backend','security guard','AI/ML engineer']
    },
    {
        filterType:'Salary',
        array:['0-5 LPA','6-11 LPA','12-25 LPA']
    },
]
const FilterCard = () => {
    const dispatch=useDispatch()
    const [selectedValue, setselectedValue] = useState("")
    const handleChange=(value)=>{
        setselectedValue(value)
    }
useEffect(() => {
 console.log(selectedValue)
 dispatch(setSearchedQuery(selectedValue))
}, [selectedValue])

  return (
    <div className=''>
            
        <div className='bg-[url("/brushBb.png")] bg-cover bg-center w-fit '>

      <h1 className='text-left uppercase font-black italic mx-10 text-white  leading-normal'>
        Filter Jobs
      </h1>
      
    </div>
        <RadioGroup value={selectedValue} onValueChange={handleChange}>

        {
            filterData.map((data,index)=>(
                <div className='my-2' key={index}>

                <h1 className='text-muted-foreground font-poppins'>{data.filterType}</h1>
                {
                    
                    data.array.map((item,idx)=>{
                        const itemId=`r${index}-${idx }`
                        return (
                           <div className='flex p-1.5 gap-2 my-1 ' key={idx}>
                            <RadioGroupItem value={item} id={itemId}/>
                            <Label htmlFor={itemId} className='font-bold'>{item}</Label>
                           </div>
                        )
                    })
                    }

                    </div>

            ))
            
        }
        </RadioGroup>
<Button onClick={()=>location.reload()} className='cursor-pointer'>Get all Jobs</Button>
    </div>
  )
}

export default FilterCard
