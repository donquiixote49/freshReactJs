import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import useMutationCart from '../Hooks/useMutationCart';
import {  cashPayment, onlinePayment } from '../Apis/payment';
import { toast } from 'react-toastify';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({cartId}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 let [flag,setFlag] = React.useState(false)
  let {data , mutate  } = useMutationCart(onlinePayment)
  let {data:cash , mutate:muCash  } = useMutationCart(cashPayment)

function handleSubmit(shippingAddress){
  if(flag)
  mutate({cartId, shippingAddress})
else
muCash({cartId, shippingAddress})

}
if(data?.data?.status==='success')
window.location.href = data?.data?.session?.url;


if(data?.data?.status === 'success')
toast('Done');




let formik = useFormik({
  initialValues:{
    details:'',
    city:'',
    phone:'',
  },

  onSubmit:handleSubmit

})











  return (
    <div>
      <div className='flex flex-col gap-y-4  items-center mt-4  '>
      <Button variant='contained' color='success'  onClick={()=>{handleOpen()
      setFlag(!flag)
      }}>Online Payment</Button>
      <Button variant='contained' color='success' sx={{mb:'12px'}}  onClick={handleOpen}>Cash Payment</Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form className="max-w-sm mx-auto my-4" onSubmit={formik.handleSubmit} >
  <div className="mb-5">
    <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Address details</label>
    <input type="text" value={formik.values.details} onChange={formik.handleChange} id="details" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Details"  />
  </div>
  <div className="mb-5">
    <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your City</label>
    <input type="text" value={formik.values.city} onChange={formik.handleChange} id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"  placeholder="Your City" />
  </div>
  <div className="mb-5">
    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone</label>
    <input type="tel" value={formik.values.phone} onChange={formik.handleChange} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"  placeholder="Your Phone" />
  </div>
  
  <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
</form>
        </Box>
      </Modal>
    </div>
  );
}
