import React, {useState} from 'react'
import {Button, Form, Modal} from 'react-bootstrap';

const AddMovie = ({add}) => {
 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title,setTitle]=useState("")

    const[description,setDescription] = useState("")

    const[rate,setRate] = useState(0)

    const[posterUrl,setPosterUrl] = useState("")

    const[trailer,setTrailer] = useState("")
    // handleAdd values 
    const handleTitle = (e) => {setTitle(e.Targets.value)}

    const handleDescription = (e) => {setDescription(e.Targets.value)}

    const handleRate = (e) => {setRate(e.Target.value)}

    const handlePosterUrl = (e) => {setPosterUrl(e.Target.value)}
    
    const handleTrailer = (e) => {setTrailer(e.Target.value)}

    const handleAdd =()=>{
      let newMovie = {title, description, posterUrl, rate, trailer}
      add(newMovie)
      setShow(false)
    }

    return (
        <div style={
            {marginBottom: '5%'}
        }>
            <Button variant="primary"
                onClick={handleShow}>
                ADD NEW MOVIE
            </Button>

            <Modal show={show}
                onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD YOUR FAVORITE MOVIE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Movie Name" autoFocus onChange={(e)=>handleTitle} />

                    <Form.Label>PosterUrl</Form.Label>
                    <Form.Control type="text" placeholder="URL" autoFocus onChange={(e)=>handlePosterUrl} />

                    <Form.Label>Trailer</Form.Label>
                    <Form.Control type="text" placeholder="Trailer" autoFocus onChange={(e)=>handleTrailer}/>

                    <Form.Label>description</Form.Label>
                    <Form.Control as="textarea"
                        rows={3} onChange={(e)=>handleDescription}/>

                    <Form.Label>Rate</Form.Label>
                    <Form.Control type="number" placeholder="Rate" onChange={(e)=>handleRate}/>

                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <Button variant="secondary"
                            onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary"
                            onClick={()=>handleAdd()}>
                            ADD THE MOVIE
                        </Button>
                        
                    </div>
                </Modal.Footer>

            </Modal>

        </div>
    )
}

export default AddMovie