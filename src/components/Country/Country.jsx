import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import './Country.css';

function Country({ label, placeHolder, getter }) {
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
    function fillAddresses(addresses) {
        console.log("map");
        if (addresses) {
            return addresses.map((address) => {
                return <tr key={address.señas}>
                    <td>{address.tipo}</td>
                    <td>{address.señas}</td>
                    <td>{address.provincia}</td>
                    <td>{address.país}</td>
                </tr>
            })
        }
    }
    function fillTable() {
        console.log("map table");
        if (data) {
            return data.map((item) => {
                return (
                    <tr key={item.nombre}>
                        <td>{item.nombre}</td>
                        <td>{item.edad}</td>
                        <td>{item.cedula}</td>
                        <td>{
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Tipo</th>
                                        <th>Señas</th>
                                        <th>Provincia</th>
                                        <th>Pais</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fillAddresses(item.direcciones)}
                                </tbody>
                            </Table>
                        }
                        </td>
                    </tr>
                )
            })
        }
    }
    return (
        <div className='Country mt-5'>
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
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Edad</th>
                                    <th>Cedula</th>
                                    <th>Direcciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fillTable()}
                            </tbody>
                        </Table>

                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Country;