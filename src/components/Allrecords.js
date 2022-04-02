import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Loading from './Loading'

export default function About() {
  const [userdata, setUserData] = useState([]);
  const [spinner, setSpinner] = useState(false);


  useEffect(() => {
    loadusers();
  }, [])
  const loadusers = async () => {
    setSpinner(true);
    const result = await axios.get("http://localhost:5000/users");
    setUserData(result.data);
    setSpinner(false);
  }

  const delUser = async (userId, e) => {
    e.preventDefault();
    const del = await axios.delete(`http://localhost:5000/users/${userId}`).then(res => console.log('data deleted'))
    loadusers();

  }

  const OnInputChange = e => {

    // console.log(e.target.value)
    userdata.map((element, index) => {
      if (element.Fullname.toUpperCase().indexOf((e.target.value).toUpperCase()) != -1) {
        //  console.log("found");
        document.getElementById(index).style.display = "";

      }
      else {
        document.getElementById(index).style.display = "none";
      }

    })


  };

  return (
    <div className='container mt-5'>

      <input className="form-control me-2" onChange={(e) => OnInputChange(e)} type="search" placeholder="Search" aria-label="Search" />

      {spinner ? <div className='text-center'><Loading></Loading></div> : <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Fullname</th>
            <th scope="col">Email</th>
            <th scope="col">Course</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

          {userdata.map((temp, index) => (

            <tr key={temp.id} id={index}>
              <th scope="col">{index + 1}</th>
              <th scope="col">{temp.Fullname}</th>
              <th scope="col">{temp.Email}</th>
              <th scope="col">{temp.Course}</th>
              <th scope="col">{temp.City}</th>
              <th scope="col">{temp.State}</th>
              <th scope="col"><Link to={`/update/${temp.id}`} className="fa-solid fa-pen-to-square text-primary"></Link><i className="fa-solid fa-trash ms-3 text-danger" onClick={(e) => delUser(temp.id, e)}></i></th>
            </tr>
          ))}
        </tbody>
      </table>
      }

    </div>
  )
}
