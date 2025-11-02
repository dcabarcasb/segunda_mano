import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosComponent } from './pages/vehiculos-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VehiculosComponent],
  exports: [VehiculosComponent]
})
export class VehiculosModule { }
