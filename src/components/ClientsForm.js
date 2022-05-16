import React from 'react';


export default function ClientsForm(){
    return(
        <div>
            <div class="container">
                <form >
                    <h1>Editar Cliente</h1>
                    <div>
                        <label for="documentType" class="form-label">Tipo de Documento</label>
                        <input type="text" class="form-control" id="documentType"/>
                    </div>
                    <div>
                        <label for="documentNumber" class="form-label">Número Documento</label>
                        <input type="Number" class="form-control" id="documentNumber"/>
                    </div>
                    <div>
                        <label for="nameClient" class="form-label">Nombre del cliente</label>
                        <input type="text" class="form-control" id="nameClient"/>
                    </div>
                    <div>
                        <label for="lastNameClient" class="form-label">Apellido del cliente</label>
                        <input type="text" class="form-control" id="lastNameClient"/>
                    </div>
                    <div>
                        <label for="phone" class="form-label">Telefono</label>
                        <input type="number" class="form-control" id="phone"/>
                    </div>
                    <div>
                        <label for="address" class="form-label">Dirección</label>
                        <input type="text" class="form-control" id="address" placeholder="Colon 120"/>
                    </div>
                    <div>
                            <label for="rol" class="form-label">Rol</label>
                            <select id="rol" class="form-select">
                            <option selected>Elija...</option>
                            <option value="User">usuario</option>
                            <option value="Client">Cliente</option>
                            </select>
                        </div>
                    <div>
                        <button type="submit" class="btn btn-primary">Actualizar</button>
                    </div>
                </form>
            </div> 
        </div>
    )
}