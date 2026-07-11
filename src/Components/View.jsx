import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    const[data,changedata]=useState([])
    
        const fetchdata=()=>{
            axios.get("https://host-demo-app.onrender.com/api/courses").then(
                (response)=>{
                    changedata(response.data)
                }
            ).catch()
        }
        useEffect(
            ()=>{fetchdata()},[]
        )
    

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className='row'>
                     {data.map(
                        (value,index) =>
                        {
                            return(
                                 <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <div class="card">
                                {/* <img src={value.image} height={400} alt="..."/> */}
                                <div class="card-body">
                                    <h5 class="card-title">{value.course_name}</h5>
                                    <p class="card-text">{value.created_at}</p>
                                    <p class="card-text">{value.duration}</p>
                                    <p class="card-text">{value.fee}</p>
                                    <p class="card-text">{value.mode}</p>
                                    <p class="card-text">{value.trainer}</p>
                                    
                                    
                                    <a href="#" class="btn btn-primary">Add</a>
                                </div>
                                </div>
                        </div>
                            )
                        }
                      )}
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View