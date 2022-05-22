import React from 'react';


export default function ClientsForm(){
    return(
        <div>
            <div className="container">
                <form >
                    <h1>Editar Cliente</h1>
                    <div>
                        <label for="documentType" className="form-label">Tipo de Documento</label>
                        <input type="text" className="form-control" id="documentType"/>
                    </div>
                    <div>
                        <label for="documentNumber" className="form-label">Número Documento</label>
                        <input type="Number" className="form-control" id="documentNumber"/>
                    </div>
                    <div>
                        <label for="nameClient" className="form-label">Nombre del cliente</label>
                        <input type="text" className="form-control" id="nameClient"/>
                    </div>
                    <div>
                        <label for="lastNameClient" className="form-label">Apellido del cliente</label>
                        <input type="text" className="form-control" id="lastNameClient"/>
                    </div>
                    <div>
                        <label for="phone" className="form-label">Telefono</label>
                        <input type="number" className="form-control" id="phone"/>
                    </div>
                    <div>
                        <label for="address" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id="address" placeholder="Colon 120"/>
                    </div>
                    <div>
                            <label for="rol" className="form-label">Rol</label>
                            <select id="rol" className="form-select">
                            <option selected>Elija...</option>
                            <option value="User">usuario</option>
                            <option value="Client">Cliente</option>
                            </select>
                        </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Actualizar</button>
                    </div>
                </form>
            </div> 
        </div>
    )
}