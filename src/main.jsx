import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import AuthContextProvider from './Context/AuthContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:false}}})

createRoot(document.getElementById('root')).render(
  
    <QueryClientProvider client={queryClient}>
    
    <AuthContextProvider>
    <ToastContainer></ToastContainer>
      <App />
    </AuthContextProvider>
    </QueryClientProvider>
  ,
)
