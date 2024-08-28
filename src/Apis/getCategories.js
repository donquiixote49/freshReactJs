import axios from "axios";




export default async function getCategories(){
return  await  axios.get('https://ecommerce.routemisr.com/api/v1/categories')

}










