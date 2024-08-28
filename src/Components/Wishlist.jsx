import React from "react";
import useQueryWishlist from "../Hooks/useQueryWishlist";
import { deleteWishlistApi, getWishlistApi } from "../Apis/wishListApis";
import Loading from "./Loading";
import useMutationWishlist from "../Hooks/useMutationWishlist";
import useMutationCart from "../Hooks/useMutationCart";
import { addToCartApi } from "../Apis/cartApis";


export default function Wishlist() {



    let { data, isLoading, isError, status, error } = useQueryWishlist("getWishlist",getWishlistApi);
    let { mutate: delMutate, status: x , isPending:delPending } = useMutationWishlist(deleteWishlistApi);
    let {mutate:addCart , status:y , isPending:addPending } = useMutationCart(addToCartApi)



    




  if (isLoading || delPending || addPending ) 
    return <Loading></Loading>;

  if (isError) return <h2>{error.message}</h2>;






  return (
    <>

    {data.count?<div className="my-5">
        <h2 className="my-10 fa-2xl font-semibold text-green-700 text-center uppercase" >My Wishlist </h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 light:text-gray-400">
            <thead className="text-xs  text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="">Product Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Product Name
                </th>

                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((ele=><tr key={ele?._id} className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600">
                <td className="p-4">
                  <img
                    src={ele?.imageCover}
                    className="w-16 md:w-32 max-w-full max-h-full"
                    alt="Apple Watch"
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 light:text-white">
                  {ele?.title}
                </td>

                <td className="px-6 py-4 font-semibold text-gray-900 light:text-white">
                  {ele?.price} EGP
                </td>
                <td className="px-6 py-4">
                <div className="flex flex-col gap-5">
                <button
                        onClick={() =>
                            {addCart(ele?._id)
                            delMutate(ele?._id)}}
                        className="font-bold text-green-600 light:text-red-500  hover:bg-green-600 hover:text-white  transition ease-in duration-300  bg-gray-100 p-3 rounded-md"
                      >
                        Add To Cart
                      </button>
                      <button
                        onClick={() => delMutate(ele?._id)
}
                        className="font-bold text-red-600 light:text-red-500  hover:bg-red-600 hover:text-white  transition ease-in duration-300  bg-gray-100 p-3 rounded-md"
                      >
                        Remove
                      </button>
                      
                </div>
                </td>
              </tr>)) }
            </tbody>
          </table>
        </div>
    </div>:<div>
          {" "}
         
         
              <h1 className="text-center text-4xl font-bold text-green-500 mt-10 uppercase">
            Your Wishlist Is Empty !!
          </h1>
        </div>}

    
    </>
  );
}
