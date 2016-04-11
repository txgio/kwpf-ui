import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {LoginComponent} from './login/login.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {PlataformaComponent} from './plataforma/plataforma.component';

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
    path: '/...',
    name: 'Plataforma',
    component: PlataformaComponent,
    useAsDefault: true
  }
])
export class AppComponent { }