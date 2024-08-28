import { useQuery } from '@tanstack/react-query'
import React from 'react'
import getAllOrders from '../Apis/allOrders'

export default function AllOrders() {


  return (
    <div className='py-7'>
    <h2 className='text-3xl text-green-600 text-center font-bold'>Your order is being prepared for shipping</h2>
    </div>
  )
}
