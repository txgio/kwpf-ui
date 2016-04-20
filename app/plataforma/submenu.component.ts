import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';

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

  toggleActive() {
    this.active = !this.active;
  }

  classes() {
    if (this.active) {
      return 'nav-item open active';
    } else {
      return 'nav-item';
    }
  }
}