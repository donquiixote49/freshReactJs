
import getCategories from '../Apis/getCategories'
import Slider from 'react-slick';
import { useQuery } from '@tanstack/react-query';

export default function CategoriesSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        autoplay:true,
        autoplaySpeed:2000,

      };



      let {data , isError , isLoading , error} = useQuery({queryKey:['getCategories'] , queryFn:getCategories })


 






  return (
    <div className='my-5 md:block hidden ' >
      <Slider {...settings} >
        {data?.data?.data.map(ele=><img className='h-[200px] ' style={{objectFit:'cover'}} key={ele._id} src={ele?.image}></img>)}
      </Slider>
    </div>
  )
}
