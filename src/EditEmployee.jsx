import React , {useState} from 'react'
import { useEffect } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editEmpl } from './slice/EditEmployeeSlice';

export const EditEmployee = () => {

    const location = useLocation();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    let item = location.state?.item

    let id = item?.id

    useEffect(()=>{
        if(!item){
            navigate('/all_employee')
        }
    }, [item])

    const [formData, setFormData] = useState({
        name: item?.name,
        email: item?.email,
        username: item?.username,
        phone: item?.phone
    })



    const handleChange = (e) =>{
        let name= e.target.name
        let value = e.target.value
    setFormData({...formData, [name]: value})
    }

    console.log('item', formData);
    
    const handleSubmit = (e) =>{
        e.preventDefault()

        dispatch(editEmpl({id, formData}))
    }

  return (

    <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name </label>
    <input type="text" class="form-control" id="exampleInputEmail1"  name="name" placeholder="Enter name" value={formData.name} onChange={handleChange} />
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="text" class="form-control" id="exampleInputEmail1" name='username'  placeholder="Enter username" value={formData.username} onChange={handleChange} />
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1"  name='email' placeholder="Enter email" value={formData.email} onChange={handleChange} />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Address</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name='phone' placeholder="Enter address " value={formData.phone} onChange={handleChange} />
  </div>
  
  <button type="submit" class="btn btn-primary" >Submit</button>
</form>
  )
}
