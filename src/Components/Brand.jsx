
import { useQuery } from '@tanstack/react-query'
import { getBrands } from '../Apis/getBrands'
import Loading from './Loading'
import BrandItem from './BrandItem'






export default function Brand() {

let {data , isLoading , isError , error} = useQuery({queryKey:['getBrand'] , queryFn:getBrands})



if(isLoading)
  return <Loading></Loading>

if(isError)
  return <h2>{error.message}</h2>

  return (
    <div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 my-5'>
      {data?.data?.data.map(brand=><BrandItem key={brand?._id} ele={brand}></BrandItem>)}
    </div>
    

    </div>
  )
}
