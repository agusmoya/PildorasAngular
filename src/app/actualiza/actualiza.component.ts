import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza',
  templateUrl: './actualiza.component.html',
  styleUrls: ['./actualiza.component.css'],
})
export class ActualizaComponent implements OnInit {
  empleados: Empleado[] = [];
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
  index: number = 0;
  accion: number;

  constructor(
    private router: Router,
    // private miServico: ServicioEmpleadosService,
    private route: ActivatedRoute,
    private empleadosService: EmpleadosService
  ) {}

  ngOnInit(): void {
    this.accion = this.route.snapshot.queryParams['accion'];

    this.empleados = this.empleadosService.empleados;
    this.index = this.route.snapshot.params['id'];
    const empleado: Empleado = this.empleadosService.encontrarEmpleado(
      this.index
    );
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

  volverHome() {
    this.router.navigate(['']);
  }

  actualizarEmpleado() {
    if (this.accion == 1) {
      const miEmpleado = new Empleado(
        this.cuadroNombre,
        this.cuadroApellido,
        this.cuadroCargo,
        this.cuadroSalario
      );

      this.empleadosService.actualizarEmpleado(this.index, miEmpleado);
    } else {
      this.empleadosService.eliminarEmpleado(this.index);
    }

    this.router.navigate(['']);
  }

  /*actualizarEmpleado() {
    const miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    this.empleadosService.actualizarEmpleado(this.index, miEmpleado);
    this.router.navigate(['']);
  }

  eliminarEmpleado() {
    this.empleadosService.eliminarEmpleado(this.index);
    this.router.navigate(['']);
  }*/
}
