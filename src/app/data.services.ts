import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices {
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  guardarEmpleados(empleados: Empleado[]) {
    this.httpClient
      .put(
        'https://mis-clientes-6737d-default-rtdb.europe-west1.firebasedatabase.app/datos.json',
        empleados
      )
      .subscribe(
        (response) => console.log('Guarda empleado:>> ', response),
        (error) => console.log('error :>> ', error)
      );
  }

  actualizarEmpleado(index: number, empleado: Empleado) {
    const url = `https://mis-clientes-6737d-default-rtdb.europe-west1.firebasedatabase.app/datos/${index}.json`;
    console.log(url);

    return this.httpClient.put(url, empleado).subscribe(
      (response) => console.log('Edita empleado:>> ', response),
      (error) => console.log('error :>> ', error)
    );
  }

  cargarEmpleados() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get(
      `https://mis-clientes-6737d-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=${token}`
    );
  }

  eliminarEmpleado(index: number) {
    const url = `https://mis-clientes-6737d-default-rtdb.europe-west1.firebasedatabase.app/datos/${index}.json`;

    return this.httpClient.delete(url).subscribe(
      (response) => console.log('Elimina empleado:>> ', response),
      (error) => console.log('error :>> ', error)
    );
  }
}
