import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {LoginComponent} from './login/login.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {PlataformaComponent} from './plataforma/plataforma.component';

@Component({
  selector: '[app]',
  host: {
    '[class.login]': "isActive(['Login'])",
    '[class.page-header-fixed]': "isActive(['Plataforma'])",
    '[class.page-sidebar-closed-hide-logo]': "isActive(['Plataforma'])",
    '[class.page-content-white]': "isActive(['Plataforma'])",
    '[class.page-sidebar-fixed]': "isActive(['Plataforma'])",
    '[class.page-footer-fixed]': "isActive(['Plataforma'])"
  },
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
export class AppComponent {
  login: boolean = true;

  constructor(private _router: Router) {

  }

  isActive(instruction: any[]): boolean {
    return this._router.isRouteActive(this._router.generate(instruction));
  }

}