import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
const category=[
    "Security Guard",
    "Frontend Developer",
    "Backend Developer",
    "Data Scientist",
    "Graphic Designer",
    "AI/ML engineer"
]
import {useNavigate} from "react-router-dom"
const CategoryCarousel = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleSubmit=(query)=>{
                dispatch(setSearchedQuery(query))
                navigate("/browse")
    }

  return (
    <div> 
        <Carousel className="w-full max-w-xl mx-auto my-20">
<CarouselContent>

                    {
                        category.map((cat,index)=>(
                            <CarouselItem className="md:basis:-1/2 lg:basis-1/3" key={index}>
                                <Button onClick={()=>handleSubmit(cat)}>{cat}</Button>
                            </CarouselItem>
                        ))
                    }
</CarouselContent>
<CarouselPrevious></CarouselPrevious>
<CarouselNext></CarouselNext>

        </Carousel>
    </div>
  )
}

export default CategoryCarousel
