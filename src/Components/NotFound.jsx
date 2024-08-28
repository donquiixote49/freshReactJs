import React from 'react'
import error from '../assets/finalProject assets/error.svg'

export default function NotFound() {
  return (
    <div className=''>
      <h2 className='mb-9 text-center text-4xl mt-4 font-bold'>NotFound</h2>
      <img className='m-auto' src={error} alt="" />
    </div>
  )
}
