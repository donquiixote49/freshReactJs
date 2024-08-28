

import axios from "axios";

let baseUrl = `https://ecommerce.routemisr.com/api/v1`
let token = localStorage.getItem('userToken')



//! add wishlist   

export function addToWishlistApi(productId){
    return axios.post(`${baseUrl}/wishlist`, {productId}, 
        {headers:{
        token
    }})
}




// ! get wishlist 


export function getWishlistApi(){
    return axios.get(`${baseUrl}/wishlist`, {headers:{
       token
   }})
}














// ! Delete wishList

export function deleteWishlistApi(id){
    return axios.delete(`${baseUrl}/wishlist/${id}`, 
        {headers:{
        token
    }})
}
