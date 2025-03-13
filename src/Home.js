import './Home.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Container, Card, CardBody, Button, Row, Col } from "react-bootstrap";

function Home (){

    return(
        <Container className="fondo" >

            <Container fluid className="d-flex justify-content-center align-items-center vh-100">

                <Card style={{ width: '25rem', height: '20rem' }}>
                    
                    <CardBody fluid className="d-flex justify-content-center align-items-center vh-100">
                        <Row>
                            <Col><Button>Menu</Button></Col>
                            <Col><Button>Stores</Button></Col>
                            <Col><Button>Cart</Button></Col>
                        </Row>
                    </CardBody>

                </Card>

            </Container>

        </Container>
    )
}

export default Home;