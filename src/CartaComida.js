import { Card, CardBody, CardText, CardTitle, Image } from "react-bootstrap"

function CartaComida(props){

    return (
        <Card style={{width: '20%'}}>
            <CardBody>
                <CardTitle><Image src={props.foto}></Image></CardTitle>
                <CardText>{props.comida}</CardText>
            </CardBody>
        </Card>
    )
}

export default CartaComida