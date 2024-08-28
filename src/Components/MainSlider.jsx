import React from "react";
import mainPic1 from "../assets/finalProject assets/images/slider-image-1.jpeg";
import mainPic2 from "../assets/finalProject assets/images/slider-image-2.jpeg";
import mainPic3 from "../assets/finalProject assets/images/slider-image-3.jpeg";

import Slider from "react-slick";

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };

  return (

    <div className="md:block hidden">
    <div className="grid grid-cols-3 my-5 ">
      <div className="col-span-2">
        <Slider {...settings}>
          <img src={mainPic1} className="w-full h-[400px]" alt="" />
          <img src={mainPic2} className="w-full h-[400px]" alt="" />
          <img src={mainPic3} className="w-full h-[400px]" alt="" />
        </Slider>
      </div>

      <div>
        <img
          src={mainPic2}
          className="w-full h-[200px]"
          style={{ objectFit: "cover" }}
          alt=""
        />
        <img src={mainPic3} className="w-full h-[200px]" alt="" />
      </div>
    </div>
    </div>
  );
}
