import {Component, Input} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {MenuItem} from './menu-item';

@Component({
  selector:'[submenu]',
  templateUrl: 'app/plataforma/submenu.component.html',
  host: {
    '[class]': 'classes()'
  },
  directives: [NgClass]
})
export class SubmenuComponent {
  active: boolean = false;

  @Input()
  menu: MenuItem;

  toggleActive() {
    this.active = !this.active;
  }

  classes() {
    if (this.active) {
      return 'nav-item open';
    } else {
      return 'nav-item';
    }
  }

  style() {
    if (this.active) {
      return {display: 'block'};
    } else {
      return null;
    }
  }
}