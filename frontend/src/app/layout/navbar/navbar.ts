import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  OnInit
} from '@angular/core';
import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { CartService } from '../../services/cart-service';
import { CartDialogue } from '../../components/cart-dialogue/cart-dialogue';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    CartDialogue,
    FormsModule,
    NgIf,
    NgFor
  ]
})
export class Navbar implements OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();
  cartCount = 0;

  isMobile = false;
  searchQuery = '';
  cartItems: any[] = [];

  navHidden = false; // Controls mobile hide/show
  private lastScrollTop = 0;

  constructor(
    private cartService: CartService,
    private dialog: MatDialog
  ) {
    this.updateScreenSize();

    // Update cart count reactively
    this.cartService.cart$.subscribe((items: any[]) => {
      this.cartItems = items;
      this.cartCount = items.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    });
  }

  ngOnInit() {
    this.navHidden = false;
  }

  @HostListener('window:resize')
  onResize() {
    this.updateScreenSize();
  }

  private updateScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    if (this.isMobile) {
      if (st > this.lastScrollTop && st > 50) {
        this.navHidden = true; // Hide on scroll down
      } else {
        this.navHidden = false; // Show on scroll up
      }
    } else {
      this.navHidden = false; // Always visible on desktop
    }

    this.lastScrollTop = st <= 0 ? 0 : st;
  }

  toggleMenu() {
    this.toggleSidebar.emit();
  }

  onSearch() {
    console.log('Searching for:', this.searchQuery);
  }

  openCartDialog() {
    const dialogRef = this.dialog.open(CartDialogue, {
      width: '400px',
      data: {
        cartItems: this.cartService.getCartItems(),
        cartService: this.cartService
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      // Optional: handle after cart dialog closes
    });
  }
}