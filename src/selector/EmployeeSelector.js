import {createSelector} from "@reduxjs/toolkit"
import { createStructuredSelector} from 'reselect'


export const getListOfEmployee = (state) =>  state.fetchEmployeSlice.emp

export const loading = (state) => state.fetchEmployeSlice.loading

export const fetchError = (state)=> state.fetchEmployeSlice.error


export const EmployeeData = createStructuredSelector({
    list : getListOfEmployee,
    loading: loading,
    error: fetchError
  })