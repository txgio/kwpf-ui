import {Component, ElementRef, OnInit} from 'angular2/core';
import {SidebarService} from './sidebar.service';
import {SubmenuComponent} from './submenu.component';

declare var jQuery:any;

@Component({
  selector: '[sidebar-menu]',
  templateUrl: 'app/plataforma/sidebar-menu.component.html',
  directives: [SubmenuComponent]
})
export class SidebarMenuComponent implements OnInit {

  constructor(private _sidebarService: SidebarService, private _elementRef: ElementRef) {

  }

  menuClosed() {
    return !this._sidebarService.menuOpen();
  }

  ngOnInit() {
    var height: number;

    var jqElement: any = jQuery(this._elementRef.nativeElement).find('.page-sidebar-menu');

    if (jqElement.attr("data-height")) {
      height = jqElement.attr("data-height");
    } else {
      height = jqElement.css('height');
    }

    jqElement.slimScroll({
      allowPageScroll: true, // allow page scroll when the element scroll is ended
      size: '7px',
      color: (jqElement.attr("data-handle-color") ? jqElement.attr("data-handle-color") : '#bbb'),
      wrapperClass: (jqElement.attr("data-wrapper-class") ? jqElement.attr("data-wrapper-class") : 'slimScrollDiv'),
      railColor: (jqElement.attr("data-rail-color") ? jqElement.attr("data-rail-color") : '#eaeaea'),
      position: 'right',
      height: height,
      alwaysVisible: (jqElement.attr("data-always-visible") == "1" ? true : false),
      railVisible: (jqElement.attr("data-rail-visible") == "1" ? true : false),
      disableFadeOut: true
    });

    jqElement.attr("data-initialized", "1");
  }

}