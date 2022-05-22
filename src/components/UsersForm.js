import React from 'react';
import { Card, Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function UsersForm(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 ">
                    <Card>
                        <Card.Header>
                            <div className="text-center">
                            <h3>Usuarios Registrados</h3>
                            </div>
                        </Card.Header>
                        <Card.Body>
                                <p >
                                    <a href="#" className='btn btn-dark btn-sm ml-auto'>Agregar Usuario</a>
                                </p>
                                <Table striped bordered >
                                <thead>
                                        <tr>
                                        <th>Id Usuario</th>
                                        <th>Nombre</th>
                                        <th>Apellidos</th>
                                        <th>Teléfono</th>
                                        <th>Direccion</th>
                                        <th>Email</th>
                                        <th>Fecha Registro</th>
                                        <th>Nro Compras</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>300542298</td>   
                                        <td>San Juaquin</td>
                                        <td>Mar@gmail.com</td>
                                        <td>13/10/2021</td>
                                        <td>13</td>
                                        <td> <Button variant="success">Activo</Button></td>

                                        </tr>
                                        <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>300542298</td>   
                                        <td>San Juaquin</td>
                                        <td>Mar@gmail.com</td>
                                        <td>13/10/2021</td>
                                        <td>13</td>
                                        <td> <Button variant="danger">Inactivo</Button></td>

                                        </tr>
                                        <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>300542298</td>   
                                        <td>San Juaquin</td>
                                        <td>Mar@gmail.com</td>
                                        <td>13/10/2021</td>
                                        <td>13</td>
                                        <td> <Button variant="danger">Inactivo</Button></td>

                                        </tr>
                                        <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>300542298</td>   
                                        <td>San Juaquin</td>
                                        <td>Mar@gmail.com</td>
                                        <td>13/10/2021</td>
                                        <td>13</td>
                                        <td> <Button variant="success">Activo</Button></td>
                                        <td> <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /> </td>

                                        </tr>
                                        
                                        
                                    </tbody>
                                </Table>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}