import {Injectable} from 'angular2/core';

@Injectable()
export class BodyLayoutService {
  private _classes: string[] = [];

  addClass(clazz: string) {
    this._classes.push(clazz);
  }

  removeClass(clazz: string) {
    let index: number = this._classes.indexOf(clazz, 0);
    if (index > -1) {
      this._classes.splice(index, 1);
    }
  }
  
  getClasses(): string[] {
    return this._classes;
  }

  toggleClass(clazz: string) {
    let index: number = this._classes.indexOf(clazz, 0);
    if (index > -1) {
      this.removeClass(clazz);
    } else {
      this.addClass(clazz);
    }
  }

}