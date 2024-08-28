
import Loading from "./Loading";
import Item from "./Item";
import getProducts from "../Apis/getProduct";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";





export default function FeaturedProduct() {


let [searchName,setSearchName] = useState("")


let {data , isError , isLoading , error} = useQuery({queryKey:['getProducts'] , queryFn:getProducts })












  if(isLoading) 
    return <Loading></Loading>


  if(isError)
    return <h2 className="text-red-700 my-3 font-bold">{error.message}</h2>






  return (

    <>
<div className="relative z-0 w-full my-8 group">
      <input onChange={(e)=>setSearchName(e.target.value)} type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Search By Name....</label>
  </div>

    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-3 my-5">
    
      {data?.data?.data.filter((prod)=> {
        return searchName.toLowerCase()=== '' ? prod : prod.title.toLowerCase().includes(searchName)
      }).map(prod=> <Item key={prod?._id} ele={prod}></Item>)}
    
    </div>


    </>
  );
}
