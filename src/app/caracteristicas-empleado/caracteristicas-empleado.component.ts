import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css'],
})
export class CaracteristicasEmpleadoComponent implements OnInit {
  @Output() caracteristicasEmpleadosEvent = new EventEmitter<string>();

  // constructor(private miServico: ServicioEmpleadosService) {}

  ngOnInit(): void {}

  agregarCaracteristicas(value: string): void {
    // this.miServico.muestraMensaje('Característica: ' + value);
    this.caracteristicasEmpleadosEvent.emit(value);
  }
}
