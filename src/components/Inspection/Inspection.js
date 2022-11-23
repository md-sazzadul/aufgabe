import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Indication from '../Indication/Indication';

const Inspection = () => {
    const [data, setData] = useState([])
    const [date, setDate] = useState('')
    const [code, setCode] = useState('Europa-Norm')
    const [count, setCount] = useState(0);
    const [removedId, setRemovedId] = useState('');


    const addIndication = (e) => {
        e.preventDefault()
        if (date && code) {
            setCount((prev) => prev + 1);
            setData([...data, { date, code, id: count + 1 }])
        }
        else{
            alert('Please enter a valid date')
        }
    }

    useEffect(() => {
        if (String(removedId).length > 0) {
            const filteredData = data.filter(d => parseInt(d.id) != parseInt(removedId));
            setData([...filteredData]);
        }


    }, [removedId]);



    return (
        <div>
            <div className='d-flex justify-content-center my-5'>
                <Form className='w-50 border border-primary border-3 rounded px-5'>
                    <Form.Group as={Row} className="m-3">
                        <Form.Label column sm='4'>
                            Date
                        </Form.Label>
                        <Col sm='6'>
                            <Form.Control type='date' onChange={(e) => {
                                const selectedDate = e.target.value
                                setDate(selectedDate)
                            }} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 mx-3">
                        <Form.Label column sm="4">
                            CodeSystem
                        </Form.Label>
                        <Col sm="6">
                            <Form.Select onChange={(e) => {
                                const selectedCode = e.target.value
                                setCode(selectedCode)
                            }}>
                                <option selected>Europa-Norm</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Button variant="outline-primary" type="submit" className='mb-3' onClick={addIndication}>
                        Add Condition
                    </Button>
                </Form>
            </div>

            <div className='bg-body mx-auto my-5 w-50 border border-primary border-3 rounded px-5 text-primary'>
                {
                    data && data.length ? '' : 'No Inspection Available'
                }

                {data?.map(d => <Indication d={d} setRemovedId={setRemovedId}></Indication>)}
            </div>

        </div>
    );
};

export default Inspection;