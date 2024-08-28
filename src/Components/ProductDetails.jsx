import React, { useEffect, useState } from "react";
import getSpecificProduct from "../Apis/getSpecificProduct";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Item from "./Item";

import Loading from "./Loading";
import useMutationCart from "../Hooks/useMutationCart";
import { addToCartApi } from "../Apis/cartApis";
import getProductsByCategory from "../Apis/getProductsByCategory";
import { Slide, toast, Zoom } from "react-toastify";
import { addToWishlistApi } from "../Apis/wishListApis";

export default function ProductDetails() {

  let {mutate , status , data , isPending:cartPending } = useMutationCart(addToCartApi)
  let {mutate:addWish , status:y , data:wishData , isPending:wishPending } = useMutationCart(addToWishlistApi)


  

  if(y === 'success')
  toast(wishData?.data?.message, {
    autoClose: 1000,
    transition: Zoom,
  } );


  if(status === 'success') 
    toast.success(data?.data?.message , {
  autoClose:1000,
  transition:Slide,
  })



  let [img, setImg] = useState("");
  let { id, categoryId } = useParams();
  let [product, setProduct] = useState([]);
  let [loading, setLoading] = useState(false);
  let [msg, setMsg] = useState("");
  let [relatedPro, setRelatedPro] = useState();
  let [flag,setFlag] = useState(false)
  






  

function toggle(){
  setFlag(!flag)
  
}

  async function getSpecificProductApi() {
    setLoading(true);
    let data = await getSpecificProduct(id);

    if (data?.data) {
      setProduct(data?.data);
      setMsg("");
      setLoading(false);
    } else {
      setMsg(data);
      setLoading(false);
    }
  }

  //? Related Products start

  async function getProductsByCategoryApi() {
    setLoading(true);
    let data = await getProductsByCategory(categoryId);

    if (data?.data) {
      setRelatedPro(data?.data);
      setMsg("");
      setLoading(false);
    } else {
      setMsg(data);
      setLoading(false);
    }
  }

  //? Related Products end

  function changeSrc(e) {
    setImg(e.target.src);
  }

  useEffect(() => {
    getProductsByCategoryApi();
  }, []);

  useEffect(() => {
    getSpecificProductApi();
  }, [id]);

  if (loading) return <Loading></Loading>;

  if (msg) return <h2 className="text-red-700 my-3 font-bold">{msg}</h2>;

  return (
    <>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 items-center py-4 ">
        <div className="">
          <img
            src={img ? img : product?.imageCover}
            className="w-full mb-3"
            alt=""
          />
          <ul className="flex gap-x-3 justify-center ">
            {product?.images?.map((img) => (
              <li key={img}>
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className="cursor-pointer"
                  onClick={changeSrc}
                  src={img}
                  width={80}
                  alt=""
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2 ms-4 mt-4 md:mt-0">
          <p className="text-green-700  ">{product?.category?.name}</p>
          <h2 className="line-clamp-1">{product?.title}</h2>
          <p className="">{product.description}</p>
          <div className="flex justify-between my-3">
            <p>{product?.price} EGP</p>
            <span className='font-semibold text-green-600 '>
            {product?.ratingsAverage}
              <i className="fas fa-star text-yellow-500 ms-1"></i>
            </span>
          </div>
          <div className="flex justify-between items-center mt-4">     
            <button
            onClick={() => {
              mutate(product?._id);
            }}
            className="btn bg-green-700 text-white p-2 rounded"
          >
            Add To Cart
          </button>   
          <i onClick={ ()=>{
            addWish(product?._id) 
            toggle()
            }} className={`${(flag === true)?'text-red-500':'text-gray-400'} fas fa-heart  btn text-2xl cursor-pointer `}></i>
          </div>
          
        </div>
      </div>
      <h2 className="text-green-700 my-4 text-3xl font-semibold">
        Related Products :
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 my-4">
        {relatedPro?.map((prod) => (
          <Item ele={prod} key={prod._id}></Item>
        ))}
      </div>
    </>
  );
}
