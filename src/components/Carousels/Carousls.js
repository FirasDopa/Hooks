import React from 'react'
// import {Carousel} from 'react-bootstrap'
import Rust from './Rust.jpg'


const Carousls = () => {
    const containerStyle = {
        backgroundImage: `url(${Rust})`,
        backgroundSize: 'cover',
        height: '640px',
        position: 'relative'
    };
    const overlayStyle = {
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient( 90deg ,rgba(0, 0, 9, 1), rgba(0, 0, 0, 0.7))'

    };
    return (
        

        <div style={containerStyle}>
            <div style={overlayStyle}></div>
            <div className="text-container"
                style={
                    {
                        color: '#ffffff',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-80%, -90%)',
                        fontSize: '80px',
                        textAlign: 'left'
                    }
            }>
                <h1 style={
                    {
                        Width: '250',
                        fontSize: '60px'
                    }
                }>The Story of Rust</h1>
                </div>
            
        </div>

    )
}

export default Carousls