import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { clearCartApi } from '../Apis/cartApis'
import Loading from '../Components/Loading'







export default function useMutationCart(fn) {
    const queryClient = useQueryClient()
  return useMutation({mutationFn:fn ,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['getCart']})
      if(fn==clearCartApi)
        queryClient.setQueriesData('getCart',null)
    }
    
  })

}
