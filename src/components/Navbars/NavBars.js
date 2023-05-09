import React from 'react'
import {Button, Container, Nav, NavDropdown, Navbar} from 'react-bootstrap'


const NavBars = () => {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container className='navcont'>
                    <Navbar.Brand href="#home" style={{color:'red'}}> <h2>RUSTFLIX</h2></Navbar.Brand>
                    <div>
                    <Nav className="me-auto" >
                            <NavDropdown title="English" id="basic-nav-dropdown" style={{borderStyle:'ridge', borderRadius:'10px', marginRight:'10px'}}>
                                <NavDropdown.Item href="#action/3.1">Français</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">العربية</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">English</NavDropdown.Item>
                            </NavDropdown>
                            <Button style={{backgroundColor:'red' ,color:'white',borderStyle:'none'}} variant="outline-success">Sign In</Button>
                    </Nav>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBars