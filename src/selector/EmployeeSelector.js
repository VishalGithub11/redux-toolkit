import {createSelector} from "@reduxjs/toolkit"
import { createStructuredSelector} from 'reselect'


export const getListOfEmployee = (state) =>  state.fetchEmployeSlice.emp

export const fetchloading = (state) => state.fetchEmployeSlice.loading

export const fetchError = (state)=> state.fetchEmployeSlice.error

export const deletedItem = (state)=>state.deletedItems.deletedItem

export const editLoading = (state)=> state.EditEmployeeSlice.loading

export const deleteLoading = (state)=> state.deletedItems.loading

export const updatedListAfterDelete = createSelector([deletedItem, getListOfEmployee], (a,b)=>{
 return  b.filter((item)=> item.id !== a.id )
})

export const newList = createSelector([updatedListAfterDelete, getListOfEmployee], (a,b)=>{
  let list = []
  if(a.length > 0){
    list = a
  }else{
    list = b
  }
 return  list
})


export const allLoading = createSelector([fetchloading, editLoading, deleteLoading], (a,b,c)=>{
let loading = a || b || c
return loading
})

export const EmployeeData = createStructuredSelector({
    list : newList,
    loading: allLoading,
    error: fetchError,
    updatedListAfterDelete,
  })