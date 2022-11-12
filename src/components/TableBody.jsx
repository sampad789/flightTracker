 import { useState,useEffect } from "react";
 import axios from 'axios';
 import TableRow from './TableRow'
const TableBody = () => {

  const [flights,setFlights] = useState(null)

const getFlights =()=>{
  axios.get(
    `http://localhost:8000/departures`
  )
  .then(response=>response.data)
  .then(data=>setFlights(Object.values(data.data)))
  .catch(err=> console.log(err))
 
}
useEffect(()=>getFlights(), [])





  return (
    <tbody>
        {flights?.map((flight,_index)=>(
          <TableRow key ={_index} flight={flight}/>
        ))}
    </tbody>
  )
}

export default TableBody;
