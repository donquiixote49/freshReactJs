
import React, { useEffect, useState } from 'react'
import { getProductByBrand } from '../Apis/getBrands'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import Item from './Item'

export default function BrandProduct() {


    let {brandId} = useParams()

    let [brandPro,setBrandPro] = useState([])
    let [loading,setLoading] = useState(false)
    let [msg,setMsg] = useState('')
    



    async function getProductsByBrandApi() {
        setLoading(true)
        let data = await getProductByBrand(brandId);
    
        if(data?.data){
            setBrandPro(data?.data?.data)
            setMsg('')
            setLoading(false)
        }else {
            setMsg(data)
            setLoading(false)
        }
    
    }
    

    useEffect(()=>{

        getProductsByBrandApi()
    
    
    },[])
    



    if(loading) 
    return <Loading></Loading>
    if(msg)
    return <h2 className="text-red-700 my-3 font-bold">{msg}</h2>
















  return (
    <>
    {brandPro.length?<div className="grid lg:grid-cols-4 md:grid-cols-3   sm:grid-cols-2 gap-y-3 my-5">
    {brandPro?.map(prod=><Item  ele={prod}  key={prod._id}></Item>)}
    </div>:<h2 className='text-center text-4xl mt-10 font-bold text-green-700 uppercase'>No Products Were Found !!!</h2>}



    </>
  )
}
