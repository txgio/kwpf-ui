import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {LoginComponent} from './login/login.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {PlataformaComponent} from './plataforma/plataforma.component';
import {BodyLayoutService} from './body-layout.service';

@Component({
  selector: '[app]',
  host: {
    '[class]': "bodyClasses()"
  },
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [BodyLayoutService]
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
  classes: string[] = ['teste'];

  constructor(private _router: Router, private _bodyLayoutService: BodyLayoutService) {

  }

  isActive(instruction: any[]): boolean {
    return this._router.isRouteActive(this._router.generate(instruction));
  }

  bodyClasses(): string {
    let classes: string[] = [];
    if (this.isActive(['Plataforma'])) {
      classes.push('page-header-fixed', 'page-sidebar-closed-hide-logo', 'page-content-white',
        'page-sidebar-fixed', 'page-footer-fixed');
    } else if (this.isActive(['Login'])) {
      classes.push('login');
    }
    return classes.concat(this._bodyLayoutService.getClasses()).join(' ');
  }

}