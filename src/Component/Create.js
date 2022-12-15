import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Create() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("")
 
    const history = useNavigate()

    const header = {"Access-Control-Allow-Origin":"*"}

    function handleSubmit(e){
        e.preventDefault(e)
        axios.post(
            'https://6390590c65ff41831110696a.mockapi.io/crud/api/v1/crud-app',
            {name:name,email:email,header}
        )
       .then(()=>{
        history("/Read")
       })
    };
    return (
        <>
        <div className='d-flex justify-content-between'>
            <h2>Create</h2>
            <Link to="/Read">
            <button className='btn btn-primary'>Show Data</button>
            </Link>
        </div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input type="text" className="form-control" placeholder="Password" 
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"  onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button> 
            </form>
        </>
    )
}

export default Create
