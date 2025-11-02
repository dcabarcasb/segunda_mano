import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculosComponent } from './vehiculos-list.component';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('VehiculosComponent', () => {
  let component: VehiculosComponent;
  let fixture: ComponentFixture<VehiculosComponent>;
  const testData = [
      { id: 1, marca: 'Renault', linea: 'Kangoo',referencia: 'hidden', modelo: 2017, kilometraje: 105, color:'blanco', imagen: 'imagen.jpg' },
      { id: 2, marca: 'Chevrolet', linea: 'Sail',referencia: 'hidden', modelo: 2019, kilometraje: 108, color:'negro', imagen: 'imagen.jpg' },
      { id: 3, marca: 'Nissan', linea: 'Sandero',referencia: 'hidden', modelo: 2012, kilometraje: 101, color:'gris', imagen: 'imagen.jpg' },
    ];
    
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [VehiculosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display table headers', () => {
    const headerElements = fixture.debugElement.queryAll(By.css('th'));
    expect(headerElements.length).toBe(4);
    expect(headerElements[0].nativeElement.textContent).toContain('#');
    expect(headerElements[1].nativeElement.textContent).toContain('Marca');
    expect(headerElements[2].nativeElement.textContent).toContain('Linea');
    expect(headerElements[3].nativeElement.textContent).toContain('Modelo');
  });

  it('should display three rows of data', () => {
    component.vehiculos = testData;
    fixture.detectChanges(); 

    const rowElements = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rowElements.length).toBe(3);

  });
});