import { Component, ElementRef, viewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  openMenu = 'assets/images/responsiv/response_nav.png';
  closeMenu = 'assets/images/responsiv/response_close.png';
  isOpen = true;
  imgNav = viewChild<ElementRef>('imgNav');
  resNav = viewChild<ElementRef>('resNav');

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.resNav()!.nativeElement.classList.toggle('openMenu');
  }

  closeNav() {
    if (!this.isOpen) {
      this.resNav()!.nativeElement.classList.remove('openMenu');
      this.isOpen = true;
    }
  }
}
