
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import Login from './Components/Login'
import Cart from './Components/Cart'
import Categories from './Components/Categories'
import Products from './Components/Products'
import Brand from './Components/Brand'
import Register from './Components/Register'
import NotFound from './Components/NotFound'
import ProtectedRoute from './Components/ProtectedRoute'
import Forget from './Components/Forget'
import ResetCode from './Components/ResetCode'
import NewPassword from './Components/NewPassword'
import ProductDetails from './Components/ProductDetails'
import CategoryProduct from './Components/CategoryProduct'
import Wishlist from './Components/Wishlist'
import BrandProduct from './Components/BrandProduct'
import AllOrders from './Components/AllOrders'


function App() {
  

  let routes = createHashRouter([{

    path:'/',element:<Layout></Layout>, children:[
      {index:true, element:<ProtectedRoute><Home></Home></ProtectedRoute>},
      {path:'/login',element:<Login></Login>},
      {path:'/reset',element:<ResetCode></ResetCode>},
      {path:'/forget',element:<Forget></Forget>},
      {path:'/newpassword',element:<NewPassword></NewPassword>},
      {path:'/cart',element:<ProtectedRoute><Cart></Cart></ProtectedRoute>},
      {path:'/wishlist',element:<ProtectedRoute><Wishlist></Wishlist></ProtectedRoute>},
      {path:'/productdetails/:id/:categoryId',element:<ProtectedRoute><ProductDetails></ProductDetails></ProtectedRoute>},
      {path:'/categoryproduct/:categoryId',element:<ProtectedRoute><CategoryProduct></CategoryProduct></ProtectedRoute>},
      {path:'/brandproduct/:brandId',element:<ProtectedRoute><BrandProduct></BrandProduct></ProtectedRoute>},
      {path:'/allorders',element:<ProtectedRoute><AllOrders></AllOrders></ProtectedRoute>},
      {path:'/categories',element:<ProtectedRoute><Categories></Categories></ProtectedRoute>},
      {path:'/products',element:<ProtectedRoute><Products></Products></ProtectedRoute>},
      {path:'/brand',element:<ProtectedRoute><Brand></Brand></ProtectedRoute>},
      {path:'/register',element:<Register></Register>},
      {path:'*',element:<NotFound></NotFound>},
    ]
  }])

  return (
    
    <>
      <RouterProvider router={routes}></RouterProvider>
      
    </>
  )
}

export default App
