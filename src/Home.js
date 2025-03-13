import './Home.css'

import { Container, Card, CardBody, CardTitle, } from "react-bootstrap";

function Home (){

    return(
        <Container className="fondo" >

            <Container fluid className="d-flex justify-content-center align-items-center vh-100">

                <Card style={{ width: '25rem', height: '20rem' }}>
                    
                    <CardBody>
                        <CardTitle>Log in</CardTitle>
                    </CardBody>

                </Card>

            </Container>

        </Container>
    )
}

export default Home;