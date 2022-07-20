import {createSelector} from "@reduxjs/toolkit"
import { createStructuredSelector} from 'reselect'


export const getListOfEmployee = (state) =>  state.fetchEmployeSlice.emp

export const loading = (state) => state.EditEmployeeSlice.loading

export const fetchError = (state)=> state.EditEmployeeSlice.error

export const editedData  = (state) => state.EditEmployeeSlice.emp

const editedData = ()=>{
    getListOfEmployee.map((item)=>{
        if(item.name === editedData.name){
            item.name = editedData.name;
            item.email = editedData.email;
            item.username = editedData.username;
            item.phone = editedData.phone
        }
        return (
            item
        )
    })
}


export const EmployeeData = createStructuredSelector({
    list : editedData,
    loading: loading,
    error: fetchError
  })