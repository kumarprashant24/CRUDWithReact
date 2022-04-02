import React from 'react'
import  { useState } from 'react'
import axios from 'axios';

export default function Register(props) {
    const [inputs,setInputs] = useState({
        Fullname:"",
        Email:"",
        Course:"",
        City:"",
        State:""
    });

    const OnInputChange = e=>{
       
       setInputs({...inputs,[e.target.name]:e.target.value})
        

    };
    const  onSub= async e =>{
      e.preventDefault();
      if(inputs.Fullname=="")
      {
          alert("Please enter Fullname");

      }
      else if(inputs.Email=="")
      {
          alert("Please enter Email");

      }
      else if(inputs.Course=="")
      {
          alert("Please enter Course");

      }
      else if(inputs.City=="")
      {
          alert("Please enter City");

      }
      else if(inputs.State=="")
      {
          alert("Please enter State");

      }
      else{
        await axios.post("http://localhost:5000/users",inputs);
        alert("data inserted successfully")
        setInputs({
            Fullname:"",
            Email:"",
            Course:"",
            City:"",
            State:""
        })
      }
     
    //   console.log(inputs);
    }
  return (
    <div className='container w-50 mt-5'>
            <form onSubmit={e=>onSub(e)}>
            <h1 className='text-center '>{props.Title}</h1>
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
                <button className="btn btn-success" type="submit">Submit</button>
            </div>
            </form>
        </div>
  )
}
