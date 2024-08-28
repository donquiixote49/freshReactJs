import axios from "axios";
import { useParams } from "react-router-dom";



export async function getBrands(){
    
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
}












export async function getProductByBrand(brandId){
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`)
}