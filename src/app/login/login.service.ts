import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginService {
  token: string;

  constructor(private router: Router, private cookies: CookieService) {}

  login(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        firebase
          .auth()
          .currentUser?.getIdToken()
          .then((idToken) => {
            this.token = idToken;
            this.cookies.set('token', this.token);
            this.router.navigate(['/']);
          });
      });
  }

  getIdToken() {
    // return this.token;
    return this.cookies.get('token');
  }

  isLoggedIn() {
    // return this.token;
    return this.cookies.get('token');
  }

  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // this.token = '';
        this.cookies.set('token', '');
        this.router.navigate(['/']);
        window.location.reload();
      });
  }
}
