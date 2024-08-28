
import getCategories from '../Apis/getCategories'
import CategoriesItem from './CategoriesItem'
import Loading from './Loading'
import { useQuery } from '@tanstack/react-query'

export default function Categories() {


  let {data , isError , isLoading , error} = useQuery({queryKey:['getCategories'] , queryFn:getCategories })





  
  



    if(isLoading) 
      return <Loading></Loading>
  
  
    if(isError)
      return <h2 className="text-red-700 my-3 font-bold">{error.message}</h2>
  





  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4 my-5'>
      {data?.data?.data.map(cate=><CategoriesItem key={cate?._id} ele={cate}></CategoriesItem>)}
    </div>
  )
}
