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
  countsByMarca: { [key: string]: number } = {};
  constructor( private vehiculoService: VehiculoService) { }

  getVehiculos(): void{
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => { this.vehiculos = vehiculos}); 
  }

  getConteo(): void{
      this.countsByMarca = this.vehiculos.reduce((acc, item) => {
      acc[item.marca] = (acc[item.marca] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });
  }

    
  ngOnInit() {
    this.getVehiculos();  
  }

}
