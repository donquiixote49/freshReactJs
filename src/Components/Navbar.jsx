import React, { useContext, useState } from "react";
import logo from "../assets/finalProject assets/freshcart-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Context/AuthContext";
import { getCartApi } from "../Apis/cartApis";
import useQueryCart from "../Hooks/useQueryCart";

export default function Navbar() {
  let navigate = useNavigate()
  let { setIsLogin, isLogin } = useContext(auth);
  let [open, setOpen] = useState(false);

  let {data , isLoading , error , isError , } = useQueryCart('getCart', getCartApi)

  function toggle() {
    setOpen(!open);
  }


  function logOut (){
    localStorage.removeItem('userToken')
    setIsLogin(null)
    navigate('/login')
  }


  return (
    <nav className="py-4 bg-main-light  ">
      <div className="container   md:flex justify-between items-center relative ">
        <div className="md:flex gap-3">
          <img src={logo} width={130} alt="" className=" sm:ms-0 mb-2 md:mb-0" />
          {isLogin ? 
            <ul className={`md:flex gap-4   ${open ? "block" : "hidden"} `}>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/products"}>Products</Link>
              </li>
              <li>
                <Link to={"/cart"}>Cart</Link>
              </li>
              <li>
                <Link to={"/wishlist"}>WishList</Link>
              </li>
              <li>
                <Link to={"/categories"}>Categories</Link>
              </li>
              <li>
                <Link to={"/brand"}>Brand</Link>
              </li>
            </ul>
           : 
            ""
          }
        </div>

        <div className="">
          <ul className={`md:flex gap-2  ${open ? "block" : "hidden"} `}>
            {isLogin ? (
              <>
              <li className="relative lg:block hidden  mx-5"> 
                <Link to={'/cart'}>
                <i className="fas fa-cart-shopping "></i>
                </Link>
                <span className="absolute bottom-3 left-3 flex justify-center items-center min-w-[25px] min-h-[25px] rounded-full bg-green-700 text-white">{data?.numOfCartItems?data?.numOfCartItems:'0'}</span>
              </li>

              <li className="cursor-pointer  " onClick={logOut}>LogOut {isLogin?<b className="text-green-700 ms-3">Hi, {isLogin.name}</b>:''} </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/register"}>Register</Link>
                </li>
                <li className="flex gap-3 mt-3 md:mt-0">
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>

        <i
          onClick={toggle}
          className={` ${
            !open ? "fa-bars" : "fa-close"
          }  md:hidden  block  fas  fa-2x absolute top-0 right-3 cursor-pointer`}
        ></i>
      </div>
    </nav>
  );
}
