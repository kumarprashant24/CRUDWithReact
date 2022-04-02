import React, { useContext } from 'react'
import  { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
import { UsersContexts } from './userContext';

export default function Update() {
    const msg = useContext(UsersContexts);
    const a = useParams();
    const [inputs,setInputs] = useState({
        Fullname:"",
        Email:"",
        Course:"",
        City:"",
        State:""
    });
    useEffect(() => {
        loadusers();
      },[])
      const loadusers = async () => {
        const result = await axios.get(`http://localhost:5000/users/${a.id}`);
       
        setInputs(result.data);
        // console.log(result.data);
    
      }
   

    const OnInputChange = e=>{
       
       setInputs({...inputs,[e.target.name]:e.target.value})
        

    };

    const  onSub= async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:5000/users/${a.id}`,inputs);
        alert("data updated successfully")
        setInputs({
            Fullname:"",
            Email:"",
            Course:"",
            City:"",
            State:""
        })
      //   console.log(inputs);
      }

  return (
    <div className='container w-50 mt-5'>
    <form onSubmit={e=>onSub(e)}>
    <h1 className='text-center '>{msg}</h1>
    <hr className='text-dark'></hr>
    
    <div className="mb-3 mt-4">
        <label  className="form-label">Fullname</label>
        <input type="text" onChange={(e)=>OnInputChange(e)} className="form-control" name='Fullname' placeholder="Fullname" value={inputs.Fullname}/>
    </div>
    <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" onChange={(e)=>OnInputChange(e)} className="form-control"  name='Email' placeholder="name@example.com" value={inputs.Email}/>
    </div>
    <div className="mb-3 mt-4">
        <label  className="form-label">Course</label>
        <input type="text" onChange={(e)=>OnInputChange(e)} className="form-control" name='Course' placeholder="Course" value={inputs.Course}/>
    </div>
    <div className="mb-3 mt-4">
        <label  className="form-label">City</label>
        <input type="text" onChange={(e)=>OnInputChange(e)} className="form-control" name='City' placeholder="City" value={inputs.City}/>
    </div>
    <div className="mb-3 mt-4">
        <label  className="form-label">State</label>
        <input type="text" onChange={(e)=>OnInputChange(e)} className="form-control" name='State' placeholder="State" value={inputs.State}/>
    </div>
    <div className="d-grid gap-2">
        <button className="btn btn-success" type="submit">Update</button>
    </div>
    </form>
</div>
  )
}
