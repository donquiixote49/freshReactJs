



import axios from "axios";

let baseUrl = `https://ecommerce.routemisr.com/api/v1`
let token = localStorage.getItem('userToken')



// ! add to cart 


export function addToCartApi(productId){
    return axios.post(`${baseUrl}/cart`, {productId}, 
        {headers:{
        token
    }})
}




// ! getCart 


export function getCartApi(){
     return axios.get(`${baseUrl}/cart`, {headers:{
        token
    }})
}













// ! Delete Items 


export function deleteCartApi(id){
    return axios.delete(`${baseUrl}/cart/${id}`, {headers:{
        token
    }})
}





// ! Update Items 


export function updateCartApi({id,count}){
    return axios.put(`${baseUrl}/cart/${id}`, {count} ,  {headers:{
        token
    }})
}


// ! Clear Cart


export function clearCartApi(){
    return axios.delete(`${baseUrl}/cart` ,  {headers:{
        token
    }})
}


