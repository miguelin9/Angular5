import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthService {

  loggedIn: boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(value => {
      this.loggedIn = true;
      this.router.navigateByUrl('/bar');
    }).catch(err => {
      alert('error en el login');
    });
  }

  logout() {
    this.afAuth.auth.signOut().then( () => {
      this.loggedIn = false;
      this.router.navigate(['/']);
    }).catch(err => {
      alert('error en el logout');
    });
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
