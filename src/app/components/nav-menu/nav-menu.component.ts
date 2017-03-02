import { Component } from '@angular/core';

@Component({
  selector: 'nav-menu',
  template: `
    <nav>
      <a [routerLink]="['/page1']">
        Page1
      </a>
      <a [routerLink]="['/page2']">
        Page2
      </a>
    </nav>
  `
})
export class NavMenuComponent { }