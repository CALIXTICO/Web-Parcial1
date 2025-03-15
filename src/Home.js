import './Home.css'

import {useNavigate} from "react-router-dom";

import { Container, Card, CardBody, Button, Row, Col } from "react-bootstrap";

function Home (){

    const navegar = useNavigate();

    function navegacionMenu()
    {
        navegar("menu");
    }

    function navegacionCart()
    {
        navegar("cart");
    }

    function navegacionStores()
    {
        navegar("stores");
    }

    return(
        <Container className="fondo" >

            <Container fluid className="d-flex justify-content-center align-items-center vh-100">

                <Card style={{ width: '25rem', height: '20rem' }}>
                    
                    <CardBody fluid className="d-flex justify-content-center align-items-center vh-100">
                        <Row>
                            <Col><Button onClick={navegacionMenu}>Menu</Button></Col>
                            <Col><Button onClick={navegacionStores}>Stores</Button></Col>
                            <Col><Button onClick={navegacionCart}>Cart</Button></Col>
                        </Row>
                    </CardBody>

                </Card>

            </Container>

        </Container>
    )
}

export default Home;