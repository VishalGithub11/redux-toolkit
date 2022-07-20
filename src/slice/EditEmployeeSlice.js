import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



export const editEmpl = createAsyncThunk('employee/EditEmpl', async  (item)=>{

    console.log('id', item.id);
    console.log('data', JSON.stringify(item.formData));

   return  await fetch(`https://jsonplaceholder.typicode.com/users/${item.id}`, 
   { method: "PUT",
    body: JSON.stringify(item.formData),
   headers: {
     "Content-type": "application/json; charset=UTF-8"
   }}
   ).then((res)=> res.json())
})

console.log('editData response', editEmpl);

export const EditEmployeeSlice = createSlice({
    name: "employee",
    initialState:{
        loading: false,
        error: '',
        emp: []
    },
    extraReducers:{
        [editEmpl.pending]:(state, {payload})=>{
            state.loading = true
        },
        [editEmpl.fulfilled]:(state, {payload})=>{
            state.loading = false
            state.emp = payload
        },
        [editEmpl.rejected]:(state, {payload})=>{
            state.loading = false
            state.emp = []
            state.error = 'some error in editing'
        }
    }
})


// export const {} = fetchEmployeSlice.actions

export default EditEmployeeSlice.reducer