import axios from "axios"




export  default async function getProductsByCategory(categoryId){


    try {
        let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryId}`)
        return data
    }
    
    catch (error) {
        return error?.message
    }

}