import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const InsertCourse = () => {
    const [input, changeInput] = useState(
        {
            course_name: "",
            duration: "",
            fee: "",
            mode: "",
            trainer: ""
        }
    )

    const inputHandler = (event) => {

        changeInput({ ...input, [event.target.name]: event.target.value })

    }

    const readValue=()=>{

        console.log(input)

        axios.post("https://host-demo-app.onrender.com/api/add-course",input).then(
            (response)=>{

                console.log(response.data)

                alert("course added")
            }

        ).catch((error) => {
    console.log(error.response);
    console.log(error.response.data);
    alert(JSON.stringify(error.response.data)); 
        }
    
        )

    }
    return (
        <div>
            <NavBar />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="card shadow p-4">
                            <h2 className="text-center text-success mb-4">InsertCourse</h2>
                            <div className="row g-4">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Course Name:</label>
                                    <input type="text" className="form-control" name="course_name" value={input.course_name} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label"> Duration:</label>
                                    <input type="text" className="form-control" name="duration" value={input.duration} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Fee:</label>
                                    <input type="text" className="form-control" name="fee" value={input.fee} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Mode:</label>
                                    <select name="mode" id="" className="form-control" value={input.mode} onChange={inputHandler}>
                                        <option className="option" value="Online">Online</option>
                                        <option className="option" value="offine">Offine</option>
                                        <option className="option" value="Hybrid">Hybrid</option>
                                    </select>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Trainer:</label>
                                    <input type="text" className="form-control" name="trainer" value={input.trainer} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                                    <button className="btn btn-success" onClick={readValue}>Insert</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsertCourse