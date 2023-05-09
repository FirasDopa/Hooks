import React from 'react'
import {Form } from 'react-bootstrap'
import ReactStars from 'react-stars'

const FilterMovies = ({setInputSearch,setRateSearch}) => {
  return (
    <div>
  
    {/* Making search button for movies*/}
    <div  style={{display:'flex' , alignItems:'center'
  , justifyContent: 'center'
 }}>
    
    <Form className="d-flex" style={{marginTop:'5% ', marginBottom:'5%', width:'50%' }}  > 
    <Form.Control
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
      onChange={(e)=>setInputSearch(e.target.value)} 
     
    />
   

  </Form>
  <ReactStars edit={true}  count={5} size={24} half={false} color2={'#ffd700'} 
  onChange={(e)=>(setRateSearch(e))} 
  />
    </div>
    </div>
  )
}

export default FilterMovies