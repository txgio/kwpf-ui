import {Component} from 'angular2/core';
import {SidebarService} from './sidebar.service';

@Component({
  selector: 'sidebar-menu',
  templateUrl: 'app/plataforma/sidebar-menu.component.html'
})
export class SidebarMenuComponent {

  constructor(private _sidebarService: SidebarService) {

  }

  menuClosed() {
    return !this._sidebarService.menuOpen();
  }

}