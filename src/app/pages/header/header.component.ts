import { Component, output } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatIcon, MatIconModule, CommonModule, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeMenuItem: string = 'Inbox';
  isMenuOpen = false

  isOpenEmailItem  = false

  isOpenEmailList = output<boolean>()

  setActiveMenuItem(menuItem: string): void {
    this.activeMenuItem = menuItem;
    this.isMenuOpen = !this.isMenuOpen;

    if(menuItem === 'Inbox') {
      this.onInboxClick()
    }
  }

  onInboxClick() {
    this.isOpenEmailList.emit(!this.isOpenEmailItem)
    console.log(this.isOpenEmailItem);
  }

  isActive(menuItem: string): boolean {
    return this.activeMenuItem === menuItem;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

  }
}
