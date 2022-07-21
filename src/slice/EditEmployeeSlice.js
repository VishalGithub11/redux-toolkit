import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



export const editEmpl = createAsyncThunk('employee/EditEmpl', async  (item)=>{

   return  await fetch(`https://jsonplaceholder.typicode.com/users/${item.id}`, 
   { method: "PUT",
    body: JSON.stringify(item.formData),
   headers: {
     "Content-type": "application/json; charset=UTF-8"
   }}
   ).then((res)=> res.json())
})

export const EditEmployeeSlice = createSlice({
    name: "employee",
    status: '',
    initialState:{
        loading: false,
        error: '',
        emp: []
    },
    reducers:{
        setStatus: (state, action)=>{
            state.status = action.payload
        }
    },
    extraReducers:{
        [editEmpl.pending]:(state, {payload})=>{
            state.loading = true
        },
        [editEmpl.fulfilled]:(state, {payload})=>{
            state.loading = false
            state.emp = payload
            state.status = 'success'
        },
        [editEmpl.rejected]:(state, {payload})=>{
            state.loading = false
            state.emp = []
            state.error = 'some error in editing'
            state.status = 'failed'
        }
    }
})


export const {setStatus } = EditEmployeeSlice.actions

export default EditEmployeeSlice.reducer