import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';

@Component({
  selector: 'sidebar',
  templateUrl: 'app/plataforma/sidebar.component.html',
  directives: [NgClass]
})
export class SidebarComponent {
  menuClosed: boolean = true;
}