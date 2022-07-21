import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchEmpl = createAsyncThunk('employee/fetchEmpl', async ()=>{
   return  await fetch('https://jsonplaceholder.typicode.com/users').then((res)=> res.json())
})

export const fetchEmployeSlice = createSlice({
    name: "employee",
    initialState:{
        loading: false,
        error: '',
        emp: []
    },


    reducers:{
        updateEmployee:(state, action)=>{
            state.emp = action.payload
        }
    },
    extraReducers:{
        [fetchEmpl.pending]:(state, {payload})=>{
            state.loading = true
        },
        [fetchEmpl.fulfilled]:(state, {payload})=>{
            state.loading = false
            state.emp = payload
        },
        [fetchEmpl.rejected]:(state, {payload})=>{
            state.loading = false
            state.emp = []
            state.error = 'some error in fetching'
        }
    }
})


export const {updateEmployee} = fetchEmployeSlice.actions

export default fetchEmployeSlice.reducer