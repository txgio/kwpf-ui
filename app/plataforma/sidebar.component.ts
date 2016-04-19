import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {SidebarMenuComponent} from './sidebar-menu.component';

@Component({
  selector: 'sidebar',
  templateUrl: 'app/plataforma/sidebar.component.html',
  directives: [NgClass, SidebarMenuComponent]
})
export class SidebarComponent {
  
}