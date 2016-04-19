import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {DashboardComponent} from './dashboard.component';
import {CadastroOrgaoComponent} from './cadastro-orgao.component';
import {BodyLayoutService} from '../body-layout.service';
import {SidebarComponent} from './sidebar.component';
import {SidebarService} from './sidebar.service';

@Component({
  templateUrl: 'app/plataforma/plataforma.component.html',
  directives: [ROUTER_DIRECTIVES, SidebarComponent],
  providers: [SidebarService]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/orgao/cadastro',
    name: 'CadastroOrgao',
    component: CadastroOrgaoComponent
  }
])
export class PlataformaComponent {
  
  constructor(private _sidebarService: SidebarService) {
    
  }
  
  toggleSidebar() {
    this._sidebarService.toggleSidebar();
  }
  
}