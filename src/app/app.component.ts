import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navLinks: {label: string, path: string}[] = [
    {label: 'Administración', path: '/dashboard'},
    {label: 'Bar', path: '/bar'},
    {label: 'Login', path: '/login'}
  ];

}
