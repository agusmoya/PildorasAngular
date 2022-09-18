import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  titulo = 'App Component';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyB5JRxbq6IubI17dWrJSQujkBJcdYb_04Q',
      authDomain: 'mis-clientes-6737d.firebaseapp.com',
    });
  }

  estaLogueado() {
    return this.loginService.isLoggedIn();
  }

  desloguear() {
    this.loginService.logout();
  }
}
