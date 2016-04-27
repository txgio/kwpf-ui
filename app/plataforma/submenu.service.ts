import {Injectable} from 'angular2/core';
import {MenuItem} from './menu-item';
import {MenuGroup} from './menu-group';

@Injectable()
export class SubmenuService {

  getMenuItems() {
    return Promise.resolve(ITEMS);
  }

}

var ITEMS: MenuGroup[] = [
  new MenuGroup([new MenuItem('Dashboard', [
    new MenuItem('Dashboard 1', [], 'icon-bar-chart'),
    new MenuItem('Dashboard 2', [], 'icon-bulb'),
    new MenuItem('Dashboard 3', [], 'icon-graph')
  ], 'icon-home')]),
  new MenuGroup([new MenuItem('UI Features', [
    new MenuItem('Color Library', []),
    new MenuItem('General Components', [])
  ], 'icon-diamond')], 'FEATURES'),
  new MenuGroup([new MenuItem('Components', [
    new MenuItem('Date & Time Pickers', []),
    new MenuItem('Color Pickers', [])
  ])], 'LAYOUTS')
];