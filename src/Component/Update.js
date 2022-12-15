import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Update() {
    const[id,setId]=useState(0)
    const[name,setName]=useState(0)
    const[email,setEmail]=useState(0)

  const navigate = useNavigate();

    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    },[])

    function handleUpdate(e){
        e.preventDefault();
        axios.put(`https://6390590c65ff41831110696a.mockapi.io/crud/api/v1/crud-app/${id}`,
        {name:name,
            email:email
        })
        .then(()=>{
            navigate("/Read")
        })
    }
  return (
    <>
                 <h2>Update</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input type="text" className="form-control" value={name} placeholder="Password"   onChange={(e)=>{
                        setName(e.target.value)
                    }}
                  />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control"  value={email} aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                </div>
                <button type="submit" className="btn btn-primary  my-2" onClick={handleUpdate} >Update</button> 
               <Link to="/Read">
                <button className='btn btn-secondary mx-2 my-2'>Back</button>
               </Link>
            </form> 
    </>
  )
}

export default Update
