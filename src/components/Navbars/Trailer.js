import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { moviesData } from '../Data/Data'
import { Button } from 'react-bootstrap'

const Trailer = () => {
const {id} = useParams()
const [trailler,setTrailler] = useState({})
useEffect(()=>{
    const movie = moviesData.find((m) => m.id === id)
    setTrailler(movie)   
},[id]

)
const navigate = useNavigate() 
const handleBack =()=> {
    navigate('/')
}
  return (
    <div >
     <p style={{color:'white', textAlign:'center',width:'15' ,marginleft:'10%'}}>{trailler.description}</p>
     <div style={{display:'inline-block', alignItems:'center'}}>
     <iframe title='trailer' src={trailler.trailer}  > </iframe>
     <Button onClick={handleBack}  style={{marginTop:'50%', alignitems:'center' }}> Home </Button>
     </div>

     
    </div>
  )
}

export default Trailer