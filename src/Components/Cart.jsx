
import useQueryCart from "../Hooks/useQueryCart";
import {
  clearCartApi,
  deleteCartApi,
  getCartApi,
  updateCartApi,
} from "../Apis/cartApis";
import useMutationCart from "../Hooks/useMutationCart";
import Loading from "./Loading";
import BasicModal from "./BasicModal";





export default function Cart() {
  let { data, isLoading, error, isError } = useQueryCart("getCart", getCartApi);

  let { mutate: delMutate, status: x , isPending:delPending} = useMutationCart(deleteCartApi);
  let { mutate: updateMutate, status: y, isPending:upPending } = useMutationCart(updateCartApi);
  let { mutate: clearMutate, status: z ,isPending:clrPending  } = useMutationCart(clearCartApi);




  if (isLoading || delPending || upPending || clrPending) 
    return <Loading></Loading>;

  

  return (

    <>
    

      {data?.numOfCartItems ? (
        <div className="my-5">
          <div className="md:flex justify-between">
            <div>
              <h2 className="my-10 fa-2xl font-semibold ">
                Cart Items :{" "}
                <span className="font-bold text-green-700">
                  {data?.numOfCartItems}
                </span>
              </h2>
              <h2 className="my-11 fa-2xl font-semibold ">
                Total Price :{" "}
                <span className="font-bold text-green-700">
                  {data?.data?.totalCartPrice} EGP
                </span>
              </h2>
            </div>
            <div>
            <BasicModal cartId={data?.data?._id}></BasicModal>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 light:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    <span className="">Product Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action{" "}
                    <i className="fas fa-trash-can ms-2 text-red-700 "></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.data.products.map((ele) => (
                  <tr
                    key={ele?.product?._id}
                    className="bg-white border-b light:bg-gray-800 light:border-gray-700  light:hover:bg-gray-600"
                  >
                    <td className="p-4">
                      <img
                        src={ele?.product?.imageCover}
                        className="w-16 md:w-32 max-w-full max-h-full"
                        alt="Apple Watch"
                      />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 light:text-white">
                      {ele?.product?.title}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <button
                          onClick={() => {
                            updateMutate({
                              id: ele?.product?._id,
                              count: ele?.count ? ele?.count - 1 : ele?.count,
                              
                            });
                            
                          }}
                          className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 light:bg-gray-800 light:text-gray-400 light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700"
                          type="button"
                        >
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <div>
                          <span>{ele?.count}</span>
                        </div>
                        <button
                          onClick={() => {
                            {updateMutate({
                              id: ele?.product?._id,
                              count: ele?.count + 1,})
                                                     }
                            
                          }}

                          className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 light:bg-gray-800 light:text-gray-400 light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700"
                          type="button"
                        >
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 light:text-white">
                      {ele?.price} EGP
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => delMutate(ele?.product?._id)}
                        className="font-bold text-red-600 light:text-red-500  hover:bg-red-600 hover:text-white  transition ease-in duration-300  bg-gray-100 p-3 rounded-md"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
          </div>
          <div className="flex justify-center items-center">
          {data?.numOfCartItems ? (
              <button
                onClick={() => {
                  clearMutate(clearCartApi);
                }}
                className="font-bold my-5 text-red-700 light:text-red-500  hover:bg-red-600 hover:text-white  transition ease-in duration-300  bg-transparent outline px-7 py-3 rounded-md"
              >
                {" "}
                Clear Cart{" "}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div>
          {" "}
        
      
              <h1 className="text-center text-4xl font-bold text-green-500 mt-10 uppercase">
            Your Cart Is Empty !!
          </h1>
        </div>
      )}


      
    </>
  );
}
