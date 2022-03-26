import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card'
import './Province.css';

function Province({ label, placeHolder, getter }) {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    function handleOnChange(e) {
        setInput(e.currentTarget.value)
    }
    function callGetter() {
        const response = getter(input);
        response.then(rawData => console.log("res: " + JSON.stringify(rawData)));
        response.then(rawData => setData(rawData));
    }
    function showList() {
        console.log("map");
        if(data){
            return data.map((item) => {
                return <ListGroup.Item key={item.tipoDireccion}>{`${item.tipoDireccion}: ${item.cantidad}`}</ListGroup.Item>
            })
        }
    }
    return (
        <div className='FormComp mt-5'>
            <Card>
                <Card.Header>{label}</Card.Header>
                <Card.Body className='d-flex flex-column align-items-center'>
                    <div className=' d-flex flex-column align-items-center'>
                        <div className='FormComp__content d-flex flex-row justify-content-between mb-2'>
                            <Form.Control className='FormComp__control' placeholder={placeHolder} value={input} onChange={handleOnChange} />
                            <Button variant="primary" onClick={callGetter}>
                                Ejecutar
                            </Button>
                        </div>
                        <ListGroup className='FormComp__content'>
                            {showList()}
                        </ListGroup>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Province;