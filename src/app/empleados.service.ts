import { Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable()
export class EmpleadosService {
  constructor(
    private servcioVentanaEmerg: ServicioEmpleadosService,
    private dataService: DataServices
  ) {}
  empleados: Empleado[] = [];

  setEmpleados(misEmpleados: Empleado[]) {
    this.empleados = misEmpleados;
  }

  obtenerEmpleados() {
    return this.dataService.cargarEmpleados();
  }

  agregarEmpleadoServicio(empleado: Empleado) {
    this.servcioVentanaEmerg.muestraMensaje(empleado.nombre);
    this.empleados.push(empleado);
    this.dataService.guardarEmpleados(this.empleados);
  }

  encontrarEmpleado(idEmpleado: number): Empleado {
    return this.empleados[idEmpleado];
  }

  actualizarEmpleado(index: number, empleado: Empleado) {
    const empleadoModificado = this.empleados[index];
    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;
    console.log(empleado);

    this.dataService.actualizarEmpleado(index, empleado);
  }

  eliminarEmpleado(index: number) {
    this.empleados.splice(index, 1);
    this.dataService.eliminarEmpleado(index);
    if (this.empleados != null) this.dataService.guardarEmpleados(this.empleados);
  }
}
