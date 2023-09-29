import React, { useState } from "react"
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useDispatch } from 'react-redux';

import { add_name, add_second_name, add_first_name, add_last_name } from "../redux/actions";

function Name(props) {

    const dispatch = useDispatch();

    const [names, setNames] = useState("");
    const [secondName, setSecondName] = useState("");
    const [apellidoMaterno, setApellidoMaterno] = useState("");
    const [apellidoPaterno, setApellidoPaterno] = useState("");
    const [btn, setBtn] = useState(true);

    const submit = (e) => {
        e.preventDefault();

        dispatch(add_name(names));
        dispatch(add_second_name(secondName))
        dispatch(add_first_name(apellidoPaterno))
        dispatch(add_last_name(apellidoMaterno))
        dispatch({ type: "act_birthday" });
        setBtn(false)
    }

    return (
        <>
            <Container>
                <Form validated onSubmit={submit}>
                    <Row>
                        <Col>
                            <Image src={props.image}
                                roundedCircle
                                width={40}
                            />
                        </Col>
                        <Col xs={9} className="main">
                            <h6 className="mb-3">¿Cuál es tu nombre?</h6>
                            <div className="component">
                                <Form.Control
                                    value={names}
                                    type="text"
                                    name="name"
                                    placeholder="Nombre"
                                    onChange={e => { setNames(e.target.value) }}
                                    className="mb-2"
                                    required
                                />
                                <Form.Control
                                    type="text"
                                    name="secondname"
                                    placeholder="Segundo Nombre"
                                    onChange={e => { setSecondName(e.target.value) }}
                                    className="mb-2"
                                />
                                <Form.Control
                                    type="text"
                                    name="firstname"
                                    placeholder="Apellido Paterno"
                                    value={apellidoPaterno}
                                    onChange={e => { setApellidoPaterno(e.target.value) }}
                                    className="mb-2"
                                    required
                                />
                                <Form.Control
                                    type="text"
                                    name="lastname"
                                    value={apellidoMaterno}
                                    placeholder="Apellido Materno"
                                    onChange={e => { setApellidoMaterno(e.target.value) }}
                                    className="mb-2"
                                />
                            </div>
                        </Col>
                    </Row>
                    {(btn) &&
                        <div className="text-center m-2">
                            <Button type="submit" variant="secondary" size="sm">Continuar</Button>
                        </div>
                    }
                </Form>
                <div>
                    {
                        (names !== "" || apellidoPaterno !== "") &&
                        <div className="message">
                            {names} {secondName} {apellidoPaterno} {apellidoMaterno}
                        </div>
                    }
                </div>
            </Container>

        </>
    )
}

export default Name