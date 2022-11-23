import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Indication = ({ d, setRemovedId }) => {
    const { date, code, id } = d;
    return (
        <div className='d-flex justify-content-center my-4'>

            <Form className='bg-light w-100 border border-primary border-3 rounded px-5 mt-1'>
                <h4 className='mt-3 mb-4'>Date : <span className='text-primary'>{date}</span> <span className='mx-5'>CodeSystem : <span className='text-primary'>{code}</span></span></h4>
                <Row className='mx-2 mt-3'>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Station
                        </Form.Label>
                        <Col sm={2}>
                            <Form.Control type='number' step='.5' defaultValue={0}></Form.Control>
                        </Col>
                    </Form.Group>
                </Row>

                <Row className='mx-3 mb-3'>
                    <Form.Group as={Col} sm='3'>
                        <Form.Label>Main</Form.Label>
                        <Form.Select>
                            <option>X</option>
                            <option>O</option>
                            <option>Z</option>
                            <option>K</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Characterisations</Form.Label>
                        <Row>
                            <Col><Form.Select>
                                <option>A</option>
                                <option>P</option>
                                <option>T</option>
                            </Form.Select></Col>
                            <Col><Form.Select>
                                <option>P</option>
                                <option>A</option>
                                <option>T</option>
                            </Form.Select></Col>
                            <Col><Form.Select>
                                <option></option>
                                <option>A</option>
                                <option>P</option>
                                <option>T</option>
                            </Form.Select></Col>
                        </Row>
                    </Form.Group>
                </Row>

                <Row className='mx-3 mb-3'>
                    <Form.Group as={Col}>
                        <Form.Label>Quant 1</Form.Label>
                        <Form.Control type='search'></Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Quant 2</Form.Label>
                        <Form.Control type='search'></Form.Control>
                    </Form.Group>
                </Row>

                <Button variant="outline-danger" className='mb-3'
                    onClick={() => setRemovedId(id)}>
                    Remove Condition
                </Button>
            </Form>
        </div>
    );
};

export default Indication;