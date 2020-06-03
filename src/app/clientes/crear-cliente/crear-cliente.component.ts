import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent implements OnInit {

    nombre: string;
    cif: string;

    constructor(private clientesService: ClientesService) { }

    ngOnInit() {
    }

    addCliente() {
        this.clientesService.postCliente({nombre: this.nombre, cif: this.cif});
    }

}
