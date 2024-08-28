import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandItem({ele}) {
  return (
    <Link to={`/brandproduct/${ele?._id}`}>

<div className='  card cursor-pointer   ' >
        <img src={ele?.image} className='w-full  rounded-t-md'  alt=""  style={{objectFit:'cover' , objectPosition:'center'}}/>
        <p className='bg-slate-100 text-3xl rounded-b-md text-center p-5 text-green-700'>{ele?.name}</p>
    </div>
    </Link>
  )
}
