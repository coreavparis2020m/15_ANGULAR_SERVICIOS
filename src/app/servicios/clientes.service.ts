import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

    clientes = [
        {nombre: 'Iberdrola S.A.U.', cif: 'A12345678'},
        {nombre: 'Telefónica S.A.U.', cif: 'A87654321'},
        {nombre: 'Gas Natural S.A.U.', cif: 'A56781234'}
    ]

    constructor() { }

    getClientes() {
        return this.clientes;
    }

    postCliente(cliente) {
        this.clientes.push(cliente);
    }

}
