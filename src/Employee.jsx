import {React, useEffect} from "react"
import {EmployeeData} from "./selector/EmployeeSelector"
import {EmployeeEditedData, } from './selector/EditEmployeeSelector'
import {useDispatch, useSelector } from 'react-redux'
import { fetchEmpl, updateEmployee } from './slice/fetchEmployeSlice'
import { deleteEmpl } from "./slice/deleteEmplSlice"
import {setStatus} from './slice/EditEmployeeSlice'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Employee = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {list, loading, error, updatedListAfterDelete} = useSelector(EmployeeData)
    const {list_new} = useSelector(EmployeeEditedData)
    const[items, setItems] = useState('')    
 
    useEffect(()=>{
      if(list_new.length > 0){
        dispatch(updateEmployee(list_new))
      }
      else{
        dispatch(fetchEmpl())
      }
      dispatch(setStatus(''))
       },[])


      const handleEdit = (item) =>{
        let id = item.id
         navigate(`/employee/edit/${id}`, {state: {item: item}})
      }

      const handleDelete = (item)=>{
        dispatch(deleteEmpl(item))
        setItems(item)
      }

       
       useEffect(()=>{
       if(items){
          dispatch(updateEmployee(updatedListAfterDelete))
          setItems('')
       }    
       }, [items])


    return (

      <>
      {/* {loading ? "" : <div class="d-flex justify-content-center spinn" >
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>  } */}
 {loading && <div className="d-flex justify-content-center spinn" >
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div> }
        <table className="table table-bordered border-primary">
        <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Username</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Address</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>

      </tr>
    </thead>
  
    <tbody>
      {list?.map((item, index)=>{
     return(
      <>
       <tr key={item.id}>
         <th scope="row">{index+1}</th>
         <td>{item.username}</td>
         <td>{item.name}</td>
         <td>{item.email}</td>
         <td>{item.phone}</td>
         <td><button type="button" className="btn btn-primary" onClick={() => handleEdit(item)}> edit </button></td>
         <td><button type="button" className="btn btn-danger" onClick={() => handleDelete(item)}> Delete </button></td>

  
       </tr>  
    </>
  )})}
    
  </tbody>
  </table>
   
  </>
    )



}

export default Employee