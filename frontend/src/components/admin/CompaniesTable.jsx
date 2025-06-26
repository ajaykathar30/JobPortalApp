import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { AvatarImage,Avatar } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2 } from 'lucide-react'

import { MoreHorizontalIcon } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSinglecompany } from '@/redux/companySlice'

const CompaniesTable = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {allCompanies,searchCompaniesByText}=useSelector(store=>store.company)
  const [filterCompany, setfilterCompany] = useState(allCompanies)
  useEffect(() => {
      const filteredCompany= allCompanies.length>0 && allCompanies.filter((company)=>{
        if(!searchCompaniesByText)return true
        return company?.name.toLowerCase().includes(searchCompaniesByText.toLowerCase())

      })
      setfilterCompany(filteredCompany)
  }, [allCompanies,searchCompaniesByText])
  const handleEdit=(company)=>{
      dispatch(setSinglecompany(company))
      navigate(`${company._id}`)
  }
  
  return (
    <div>
      <Table className='my-5'>
        <TableCaption>A list of your recent registered companies </TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Logo</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Action</TableHead>
            </TableRow>
        </TableHeader>
       <TableBody>
  {Array.isArray(filterCompany) && filterCompany.length > 0 ? (
    filterCompany.map((company, idx) => (
      <TableRow key={idx}>
        <TableCell>
          <Avatar>
            <AvatarImage src={company?.logo || "/cl.png"} />
          </Avatar>
        </TableCell>
        <TableCell>{company?.name}</TableCell>
        <TableCell>{company?.createdAt?.split('T')[0]}</TableCell>
        <TableCell className="cursor-pointer">
          <Popover>
            <PopoverTrigger>
              <MoreHorizontalIcon />
            </PopoverTrigger>
            <PopoverContent className="w-32">
              <div className="flex gap-2 w-fit cursor-pointer items-center">
                <Edit2 className="w-4" />
                <span onClick={()=>{handleEdit(company)}}>Edit</span>
              </div>
            </PopoverContent>
          </Popover>
        </TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={4} className="text-center">
        No companies to display
      </TableCell>
    </TableRow>
  )}
</TableBody>


      </Table>
    </div>
  )
}

export default CompaniesTable
