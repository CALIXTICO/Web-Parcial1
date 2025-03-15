import { useState } from "react";

import { Container, Row, Form, Button, Image} from "react-bootstrap";

function Login() 
{
    const [valorPassword, setValorPassword] = useState();
    const [errorPassword, setErrorPassword] = useState(true);

    const handlePasswordChange = ((e) => {setValorPassword(e.target.value)});
    const clickLogIn = (() => {
        let valorError;
        if (valorPassword.length < 5 || valorPassword.length > 8){valorError= true;}
        else {valorError= false;}
        setErrorPassword(valorError);
        
        if(valorError == true){alert("La contraseña debe tener entre 5 y 8 caracteres.");}
    })

    return(
        <Container fluid  className="vh-100">
            <Row>
                <Container style={{width: '60%', backgroundColor: '#f8f2f2'}}>
                    <Container className="text-center" style={{height: '30%'}}>
                        <Row><h1 style= {{color: "#233d3e"}}>TOO GOOD TO GO</h1></Row>
                        <Row><h3 style= {{color: "#fe8166"}}>FOOD WAISTING SOLUTION</h3></Row>
                    </Container>
                    <Image src="/fondoLogin.jpeg" style={{height: '70%'}}/>
                </Container>


                <Container className="d-flex align-items-center justify-content-center vh-100" style={{width: '40%', backgroundColor: '#233d3e'}}>
                    <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Username" />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={valorPassword}/>
                                <Form.Text style= {{color: "white"}}>Forgot Password? </Form.Text>
                            </Form.Group>

                            <Button style={{ width: '10rem', backgroundColor: 'white'}} onClick={clickLogIn}>
                                <h3 style={{color: 'black'}}>Log in</h3>
                            </Button>
                    </Form>
                </Container>
            </Row>
        </Container>
    )
}

export default Login;   