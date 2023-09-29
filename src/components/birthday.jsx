import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { add_day, add_month, add_year } from "../redux/actions";

function Birthday(props) {

    const dispatch = useDispatch();
    const [day, setDay] = useState('');
    const [month, setMonth] = useState("");
    const [year, setYear] = useState('');
    const [btn, setBtn] = useState(true);

    const submit = (e) => {
        e.preventDefault();
        dispatch(add_day(day));
        dispatch(add_month(month));
        dispatch(add_year(year));
        dispatch({ type: "act_contact" });
        setBtn(false);
    }

    return (
        <Container>
            <Form validated={true} onSubmit={submit} >
                <Row>
                    <Col>
                        <Image src={props.image}
                            roundedCircle
                            width={40}
                        />
                    </Col>
                    <Col xs={9} className="main">
                        <h6>¿Cuál es tu fecha de nacimiento?</h6>
                        <Form.Control
                            type="number" maxLength={2} max={31} min={1} placeholder="Dia"
                            required
                            onChange={e => { setDay(e.target.value) }}
                            className="mb-2"
                        />
                        <Form.Select aria-label="Seleccione el mes"
                            className="mb-2" onChange={e => { setMonth(e.target.value) }}>
                            <option selected value="Enero">Enero</option>
                            <option value="Febrero">Febrero</option>
                            <option value="Marzo">Marzo</option>
                            <option value="Abril">Abril</option>
                            <option value="Mayo">Mayo</option>
                            <option value="Junio">Junio</option>
                            <option value="Julio">Julio</option>
                            <option value="Agosto">Agosto</option>
                            <option value="Septiembre">Septiembre</option>
                            <option value="Octubre">Octubre</option>
                            <option value="Noviembre">Noviembre</option>
                            <option value="Diciembre">Diciembre</option>
                        </Form.Select>

                        <Form.Control
                            type="number" maxLength={4} max={2023} min={1900} placeholder="Año"
                            required
                            onChange={e => { setYear(e.target.value) }}
                            className="mb-2"
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
                (day !== "" || year !== "") &&
                <div className="message">
                    {day} {month} {year}
                </div>
            }
        </Container>

    )
}

export default Birthday