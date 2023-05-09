import React from 'react'
import {Button, Card} from 'react-bootstrap'
import ReactStars from 'react-stars'


const MovieCard = ({movie, deleteMovie}) => {
    return (
        // showing Data inside MovieCard
        <div>
            <Card style={{width: '18rem', height: '50rem', marginBottom:'20px' } }>
                <Card.Img variant="top"
                    src={
                        movie.posterUrl
                    }/>
                <Card.Body>
                    <Card.Title> {
                        movie.title
                    } </Card.Title>
                    <Card.Text> {
                        movie.description
                    } </Card.Text>
                    <ReactStars edit={false}value={movie.rate} count={5} size={24}  color2={'#ffd700'} />
                    <Button variant="primary" href={movie.trailer} target='blank' > Trailer </Button>
                </Card.Body>
                
            </Card>
        </div>
    )
}

export default MovieCard