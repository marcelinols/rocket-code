
import React, { useState } from "react";

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { add_email, add_phone } from "../redux/actions";

function Contac(props) {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("+52");
    const [btn, setBtn] = useState(true);

    const submit = (e) => {
        e.preventDefault();
        dispatch(add_email(email));
        dispatch(add_phone(phone));
        dispatch({ type: "act_send" });
        setBtn(false);
    }

    return (
        <Container>
            <Form validated={true} onSubmit={submit}>
                <Row>
                    <Col>
                        <Image src={props.image}
                            roundedCircle
                            width={40}
                        />
                    </Col>
                    <Col xs={9} className="main">
                        <h6>Datos de Contacto</h6>
                        <Form.Control
                            type="email"
                            placeholder="Correo"
                            onChange={e => { setEmail(e.target.value) }}
                            className="mb-2"
                            required
                        />
                        <Form.Control
                            type="text"
                            value={phone}
                            placeholder="Telefono"
                            onChange={e => { setPhone(e.target.value) }}
                            className="mb-2"
                            required
                            maxLength={13}
                            minLength={13}
                        />
                    </Col>
                </Row>
                {(btn) &&
                    <div className="text-center m-2">
                        <Button type="submit" variant="secondary" size="sm">Continuar</Button>
                    </div>
                }
            </Form>

            {
                (email !== "" || phone !== "") &&
                <div className="message">
                    Correo Electronico: {email} <br></br> Telefono Celular: {phone}
                </div>
            }

        </Container>
    )
}

export default Contac;