import axios from "axios";




export default  async function getProducts(){
    
        return await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    
    }
    








