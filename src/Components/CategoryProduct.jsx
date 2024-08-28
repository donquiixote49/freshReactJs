

import React, { useEffect, useState } from 'react' 

import { useParams } from 'react-router-dom';
import Item from './Item';
import Loading from './Loading';
import getProductsByCategory from '../Apis/getProductsByCategory';







export default function CategoryProduct() {



let {categoryId} = useParams()
let [catePro,setCatePro] = useState([])
let [loading,setLoading] = useState(false)
  let [msg,setMsg] = useState('')



    async function getProductsByCategoryApi() {
        setLoading(true)
        let data = await getProductsByCategory(categoryId);
    
        if(data?.data){
            setCatePro(data?.data)
            setMsg('')
            setLoading(false)
        }else {
            setMsg(data)
            setLoading(false)
        }
    
    }


    useEffect(()=>{

        getProductsByCategoryApi()
    
    
    },[])
    



    if(loading) 
      return <Loading></Loading>
  
  
    if(msg)
      return <h2 className="text-red-700 my-3 font-bold">{msg}</h2>
  





  return (
    <>
    {catePro.length?<div className="grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 gap-y-3 my-5">
    {catePro?.map(prod=><Item  ele={prod}  key={prod._id}></Item>)}
    </div>:<h2 className='text-center text-4xl mt-10 font-bold text-green-700 uppercase'>No Products Were Found !!!</h2>}
    </>
  )
}
