import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Read() {

    const [data, setData] = useState([])

    function handleDelete(id){
        axios.delete(`https://6390590c65ff41831110696a.mockapi.io/crud/api/v1/crud-app/${id}`)
        .then(()=>{
            getData();
        })
    }
    
    function setTostorage(id,name,email){
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
    }

    function getData() {
        axios.get("https://6390590c65ff41831110696a.mockapi.io/crud/api/v1/crud-app")
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
    }

    useEffect(() => {
        getData()
    },[])

    return (
        <><div className='d-flex justify-content-between'>
            <h2>Read Operation</h2>
            <Link to="/">
            <button className='btn btn-dark'>Create</button>
            </Link>
        </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Actions</th>
                        
                    </tr>
                </thead>
                {data.map((eachData,index) => {
                    return (
                        <>
                            <tbody key={eachData.id}>
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{eachData.name}</td>
                                    <td>{eachData.email}</td>
                                    <td>
                                    <Link to='/Update'>
                                    <button className='btn btn-success' onClick={()=>setTostorage(eachData.id,eachData.name,eachData.email)}>Edit</button>
                                    </Link>
                                    </td>
                                    <td><button className='btn btn-danger' onClick={()=>handleDelete(eachData.id)}>Delete</button></td>
                                </tr>
                            </tbody>
                        </>
                    )
                })}

            </table>
        </>
    )
}

export default Read
