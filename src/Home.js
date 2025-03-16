import './Home.css'

import { FormattedMessage } from "react-intl";

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
                            <Col><Button onClick={navegacionMenu}><FormattedMessage id= "BotonMenu"/></Button></Col>
                            <Col><Button onClick={navegacionStores}><FormattedMessage id= "BotonStores"/></Button></Col>
                            <Col><Button onClick={navegacionCart}><FormattedMessage id= "BotonCart"/></Button></Col>
                        </Row>
                    </CardBody>

                </Card>

            </Container>

        </Container>
    )
}

export default Home;