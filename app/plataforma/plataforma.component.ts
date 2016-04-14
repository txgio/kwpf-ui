import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {DashboardComponent} from './dashboard.component';
import {CadastroOrgaoComponent} from './cadastro-orgao.component';
import {BodyLayoutService} from '../body-layout.service';
import {SidebarComponent} from './sidebar.component';

@Component({
  templateUrl: 'app/plataforma/plataforma.component.html',
  directives: [ROUTER_DIRECTIVES, SidebarComponent]
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
  
  constructor(private _bodyLayoutService: BodyLayoutService) {
    
  }
  
  toggleSidebar() {
    this._bodyLayoutService.toggleClass('page-sidebar-closed');
  }
  
}