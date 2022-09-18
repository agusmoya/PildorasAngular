import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
// import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Listado de Empleados';
  empleados: Empleado[] = [];
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  constructor(
    // private miServico: ServicioEmpleadosService,
    private empleadosService: EmpleadosService
  ) {
    // this.empleados = this.empleadosService.empleados
  }

  ngOnInit(): void {
    // this.empleados = this.empleadosService.empleados;
    this.empleadosService.obtenerEmpleados().subscribe((misEmpleados) => {
      // console.log('empleados :>> ', misEmpleados);
      this.empleados = Object.values(misEmpleados);
      this.empleadosService.setEmpleados(this.empleados);
    });
  }

  agregarEmpleado() {
    const miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    // this.miServico.muestraMensaje('Nombre del empleado:' + miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }
}
