import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isExpanded = false;
  menuItems = [
    { iconClass: 'fa-home', text: 'Home' },
    { iconClass: 'fa-user', text: 'Profile' },
    { iconClass: 'fa-cog', text: 'Settings' },
    { iconClass: 'fa-info', text: 'About' },
    { iconClass: 'fa-contact', text: 'Contact' },
    { iconClass: 'fa-help', text: 'Help' }
  ];

  toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}