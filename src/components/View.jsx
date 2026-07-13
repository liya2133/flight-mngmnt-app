import axios from 'axios'
import React, { useEffect, useState } from 'react'



    const View = () => {
    const[data,changeData]=useState([])
    const fetchData = () => {

        axios.get("https://host-demo-app.onrender.com/api/flights").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
            }
            useEffect(
                () => {
                    fetchData()
                },[]
            )
  
  return (
    <div>

<div className="container">
            <h1><b>View Table</b></h1>
    <div className="row">
        <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">

            <table className="table">
  <thead>
    <tr>
      
      <th scope="col">Airline</th>
      <th scope="col"> Flight no</th>
      <th scope="col">Origin</th>
      <th scope="col"> Destination</th>
      <th scope="col">Departure date</th>
      <th scope="col">Departure time</th>
      <th scope="col">Arrival time</th>
      <th scope="col">Fare</th>
      <th scope="col">Total seats</th>
      <th scope="col">Available seats</th>
      <th scope="col">status</th>
      <th scope="col">Cretaed at</th>
      
    </tr>
  </thead>
  <tbody>
    
    {data.map(
      (value,index)=>{
        return(
          <tr>
      
      
      <td>{value.airline}</td>
      <td>{value.flight_number}</td>
      <td>{value.origin}</td>
      <td>{value.destination}</td>
      <td>{value.departure_date}</td>
      <td>{value.departure_time}</td>
      <td>{value.arrival_time}</td>
      <td>{value.fare}</td>
      <td>{value.total_seats}</td>
      <td>{value.available_seats}</td>
      <td>{value.status}</td>
      <td>{value.created_at}</td>
      
    </tr>
        )
      }
    )}
   
  </tbody>
</table>
         </div>
</div>
    </div>
     </div>
  )
}

export default View