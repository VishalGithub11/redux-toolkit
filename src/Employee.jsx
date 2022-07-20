import {React, useEffect} from "react"
import {EmployeeData} from "./selector/EmployeeSelector"
import {useDispatch, useSelector } from 'react-redux'
import { fetchEmpl } from './slice/fetchEmployeSlice'
import { useNavigate } from "react-router-dom"

const Employee = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {list, loading, error} = useSelector(EmployeeData)

    useEffect(()=>{
        dispatch(fetchEmpl())
       },[])


       const handleEdit = (item) =>{
        let id = item.id
         navigate(`/employee/edit/${id}`, {state: {item: item}})
       }

    return (

      <>
 {loading ? <div>Loading...</div>  : 
        <table className="table table-bordered border-primary">
        <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Username</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Address</th>
      </tr>
    </thead>
  
    <tbody>
      {list?.map((item)=>{
     return(
      <>
       <tr key={item.id}>
         <th scope="row">{item.id}</th>
         <td>{item.username}</td>
         <td>{item.name}</td>
         <td>{item.email}</td>
         <td>{item.phone}</td>
         <td><button type="button" className="btn btn-primary" onClick={() => handleEdit(item)}> edit </button></td>
  
       </tr>  
    </>
  )})}
    
  </tbody>
  </table>
   }
  </>
    )



}

export default Employee