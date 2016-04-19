import {Injectable} from 'angular2/core';
import {BodyLayoutService} from '../body-layout.service';

@Injectable()
export class SidebarService {
  private _open: boolean = true;

  constructor(private _bodyLayoutService: BodyLayoutService) {

  }

  closeMenu() {
    this._open = false;
  }

  openMenu() {
    this._open = true;
  }

  toggleMenu() {
    this._open = !this._open;
  }

  toggleSidebar() {
    this._bodyLayoutService.toggleClass('page-sidebar-closed');
    this.toggleMenu();
  }

  menuOpen() {
    return this._open;
  }

}