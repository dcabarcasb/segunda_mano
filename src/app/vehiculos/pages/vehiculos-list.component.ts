import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../models/vehiculo.module';
import { VehiculoService } from '../services/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.css'],
  standalone: false
})
export class VehiculosComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  constructor( private vehiculoService: VehiculoService) { }

  getVehiculos(): void{
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => { this.vehiculos = vehiculos}); 
  }
  ngOnInit() {
    this.getVehiculos();
  }

}
