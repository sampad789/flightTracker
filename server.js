const PORT = 8000;

import  axios from 'axios';
import express  from 'express'
import  cors  from 'cors';
import * as dotenv from 'dotenv'

dotenv.config();

// Initialize express
const app = express();

// Initialize Cors for all routes 
app.use(cors())

app.get('/',(req,res)=>{
    res.json('Please Update your credentials to work with the data.')
})

app.get('/departures',(req,res)=>{
    const options ={
        url:process.env.DEPARTURE_URL,
        headers:{
            accept:'application/json',
            'X-Cassandra-Token':process.env.TOKEN
        }
    }
    axios.request(options).then(response=>{
       console.log(response.data)
       res.json(response.data)
    })
    .catch(error=>{
        console.log(error)
    })
})

app.get('/arrivals',(req,res)=>{
    const options ={
        url:process.env.ARRIVAL_URL,
        headers:{
            accept:'application/json',
            'X-Cassandra-Token':process.env.TOKEN
        }
    }
    axios.request(options).then(response=>{
       console.log(response.data)
       res.json(response.data)
    })
    .catch(error=>{
        console.log(error)
    })
})

app.listen(PORT,()=>(console.log('Server Running On PORT ' + PORT)))

