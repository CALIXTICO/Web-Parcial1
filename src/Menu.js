import { useState, useEffect } from "react"

import { Container, Navbar, Carousel, Row, Column, Card} from "react-bootstrap"

import { FormattedMessage } from "react-intl";

import CartaComida from './CartaComida';


function Menu (){

    const [comidas, setComidas] = useState([])
    useEffect(()=>{
        fetch('https://my.api.mockaroo.com/parcial1_web.json?key=8ee8a4b0')
        .then(data => data.json())
        .then(data => setComidas(data))
    },[])

    return(
        <Container>
            <Row>
                <Navbar bg="dark" variant="dark"><h1 style={{color: 'white'}}><FormattedMessage id= "BotonMenu"/></h1></Navbar>
            </Row>

            <Row>
                <Carousel/>
            </Row>

            <Row>
            {comidas.map(comida => <CartaComida comida= {comida.comida} foto= {comida.foto} />)}
            </Row>
        </Container>

    )

}

export default Menu