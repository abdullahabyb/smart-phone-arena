import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  // Nav bar and app  title
  template: `
    <h1 id="topBar">{{title}}</h1>
    <nav id="navBar">
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/Phones" routerLinkActive="active">Phones</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // App Name
  title = 'Smart Phone Arena';
}
