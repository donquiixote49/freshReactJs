
import React from 'react'









export default function Footer() {
  return (
    <div className='  pt-10 pb-16 bg-gray-50'>
     <div className='container'>
     <div className='footer-text'>
     <h2 className='text-2xl text-green-500 font-semibold mb-2'> Get the FreshCart App</h2>
     <p className='text-gray-500'>We Will Send You A Link, Open It On Your Phone To Download The App.</p>
     </div>
     <div className='footer-input flex gap-x-8 mt-3 '>
     <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Enter Your Email"  />
     <button className=' md:py-2 md:px-5 p-2  text-white bg-green-600 rounded-md'>Get App  </button>
     </div>
     <hr className=' my-5'></hr>
     <div className='footer-bottom lg:flex md:gap-x-5 justify-between items-center my-6'>
        <div className='flex items-center gap-4' >
            <h3 className='mt-4 text-gray-500 md:text-2xl text-sm'>Payment Partners </h3>
            <ul className='mt-4'>
                <li className='flex gap-x-4  items-center cursor-pointer'>
                <i className="fa-brands fa-amazon-pay text-3xl"></i>
                <i className="fa-brands fa-cc-amex text-3xl"></i>
                <i className="fa-brands fa-cc-mastercard text-3xl"></i>
                <i className="fa-brands fa-cc-paypal text-3xl"></i>
                </li>
            </ul>
            </div>
            <div className='flex gap-x-4 md:mt-0 mt-4'>
            <h3 className='mt-4 text-gray-500 md:text-2xl  text-sm'>Get Deliveries With FreshCart App On </h3>
            <ul className='mt-2 md:mt-4'>
                <li className='flex gap-x-4  items-center cursor-pointer'>
                <i className="fa-brands fa-app-store-ios text-3xl"></i>
                <i className="fa-brands fa-google-play text-3xl"></i>
                
                </li>
            </ul>
            </div>
     </div>
     <hr className='mt-8'></hr>
     </div>
    </div>
  )
}
