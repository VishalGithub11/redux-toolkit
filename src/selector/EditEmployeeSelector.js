import {createSelector} from "@reduxjs/toolkit"
import { createStructuredSelector} from 'reselect'


export const getListOfEmployee = (state) =>  state.fetchEmployeSlice.emp

export const loading = (state) => state.EditEmployeeSlice.loading

export const fetchError = (state)=> state.EditEmployeeSlice.error

export const editedData  = (state) => state.EditEmployeeSlice.emp

export const statusEdit = (state) => state.EditEmployeeSlice.status


const updatedList = createSelector([editedData, getListOfEmployee],(a,b)=>{
    let arr = []
    for(let x=0; x<b.length; x++){
        let new_obj = {...b[x]}
        if(b[x].id == a.id){
            new_obj.name = a.name
                new_obj.email = a.email
                new_obj.username = a.username
                new_obj.phone = a.phone
                arr.push(new_obj)
        }else{
            arr.push(b[x])
        }
    }
    return arr

} )

export const EmployeeEditedData = createStructuredSelector({
    list_new : updatedList,
    loading: loading,
    error: fetchError,
    statusEdit
  })