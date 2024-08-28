

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { addToCartApi } from '../Apis/cartApis'
import useMutationCart from '../Hooks/useMutationCart'
import {  Slide, toast, Zoom } from 'react-toastify'
import { addToWishlistApi } from '../Apis/wishListApis'









export default function Item({ele}) {

let [flag,setFlag] = useState(false)
let {mutate , status , data , isPending:cartPending   } = useMutationCart(addToCartApi)
let {mutate:addWish , status:y , data:wishData , isPending:wishPending } = useMutationCart(addToWishlistApi)




if(y === 'success')

  
{toast(wishData?.data?.message, {
  autoClose: 1000,
  transition: Zoom,
} );}





  if(status === 'success') 

  
    {toast.success(data?.data?.message , {
      autoClose: 1000,
      transition: Slide,
    });}



function toggle(){
  setFlag(!flag)
  
}


  return (
    <div>
        
      <div className="product p-2 cursor-pointer">
      <Link to={`/productdetails/${ele?._id}/${ele?.category?._id}`}>
        <img src={ele?.imageCover} className='w-full' alt="" />
        <p className='text-green-700  '>{ele?.category?.name}</p>
        <h2 className='line-clamp-1'>{ele?.title}</h2>
        <div className="flex justify-between my-3">
            <p>{ele?.price} EGP</p>
            <span className='font-semibold text-green-600'>{ele?.ratingsAverage} <i className='fas fa-star text-yellow-500 ms-1'></i></span>
        </div>
        </Link>
        <div className='flex justify-between items-center'>
          <button onClick={()=>{mutate(ele._id)}} className='btn bg-green-700 text-white p-2 rounded'>Add To Cart</button>
          <i onClick={ ()=>{
            addWish(ele?._id) 
            toggle()
            }} className={`${(flag === true)?'text-red-500':'text-gray-400'} fas fa-heart  btn text-2xl `}></i>
        </div>
        
      </div>
    </div>
  )
}
