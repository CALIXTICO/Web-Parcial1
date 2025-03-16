import { useState } from "react";

import { Container, Row, Form, Button, Image} from "react-bootstrap";

import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";

function Login() 
{
    const { formatMessage } = useIntl();

    const [valorPassword, setValorPassword] = useState();
    const [errorPassword, setErrorPassword] = useState(true);

    const handlePasswordChange = ((e) => {setValorPassword(e.target.value)});
    const clickLogIn = (() => {
        let valorError;
        if (valorPassword.length < 5 || valorPassword.length > 8){valorError= true;}
        else {valorError= false;}
        setErrorPassword(valorError);
        
        if(valorError == true){alert(formatMessage({ id: "AlertPassword"}));}
    })

    return(
        <Container fluid  className="vh-100">
            <Row>
                <Container style={{width: '60%', backgroundColor: '#f8f2f2'}}>
                    <Container className="text-center" style={{height: '30%'}}>
                        <Row><h1 style= {{color: "#233d3e"}}><FormattedMessage id = 'TituloLogin'/></h1></Row>
                        <Row><h3 style= {{color: "#fe8166"}}><FormattedMessage id = 'SubtituloLogin'/></h3></Row>
                    </Container>
                    <Image src="/fondoLogin.jpeg" style={{height: '70%'}}/>
                </Container>


                <Container className="d-flex align-items-center justify-content-center vh-100" style={{width: '40%', backgroundColor: '#233d3e'}}>
                    <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder={formatMessage({ id: "Username"})} />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder={formatMessage({ id: "Password"})} onChange={handlePasswordChange} value={valorPassword}/>
                                <Form.Text style= {{color: "white"}}> <FormattedMessage id = "ForgotPassword"/> </Form.Text>
                            </Form.Group>

                            <Button style={{ width: '10rem', backgroundColor: 'white'}} onClick={clickLogIn}>
                                <h3 style={{color: 'black'}}><FormattedMessage id = "Login"/></h3>
                            </Button>
                    </Form>
                </Container>
            </Row>
        </Container>
    )
}

export default Login;   