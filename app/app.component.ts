import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {LoginComponent} from "./login.component";
import {CadastroComponent} from "./cadastro.component";
import {PlataformaComponent} from "./plataforma.component";

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: CadastroComponent
  },
  {
    path: '/plataforma',
    name: 'Plataforma',
    component: PlataformaComponent
  }
])
export class AppComponent { }