import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

let items = ''


export const deleteEmpl = createAsyncThunk('employee/EditEmpl', async  (item)=>{
    items = item
   return  await fetch(`https://jsonplaceholder.typicode.com/users/${item.id}`, 
   { method: "DELETE"
   }
   ).then((res)=>{
    return res.json()
   } )
})


export const deleteEmplSlice = createSlice({
    name: "employeeDELETE",
    initialState:{
        loading: false,
        error: '',
        deletedItem: []
    },
    reducers:{
    },
    extraReducers:{
        [deleteEmpl.pending]:(state, {payload})=>{
            state.loading = true
        },
        [deleteEmpl.fulfilled]:(state, {payload})=>{
            state.loading = false
            state.deletedItem = items
        },
        [deleteEmpl.rejected]:(state, {payload})=>{
            state.loading = false
            state.deletedItem = []
            state.error = 'some error in editing'
          
        }
    }
})


export const { } = deleteEmplSlice.actions

export default deleteEmplSlice.reducer