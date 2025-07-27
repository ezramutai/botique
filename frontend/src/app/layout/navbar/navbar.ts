import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output
} from '@angular/core';
import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgIf, NgFor } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CartService } from '../../services/cart-service';
import { CartDialogue } from '../../components/cart-dialogue/cart-dialogue';
import { FormsModule } from '@angular/forms';



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
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    NgIf,
    NgFor
  ]
})
export class Navbar {
  @Output() toggleSidebar = new EventEmitter<void>();
  @Input() cartCount = 0;

  isMobile = false;
  searchQuery = '';
  cartItems: any[] = [];

  constructor(
    private cartService: CartService,
    private dialog: MatDialog
  ) {
    this.updateScreenSize();

    // 🔁 Sync cart state
    this.cartService.cart$.subscribe((items: any[]) => {
      this.cartItems = items;
      this.cartCount = items.reduce(
        (acc: any, item: { quantity: any }) => acc + item.quantity,
        0
      );
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.updateScreenSize();
  }

  private updateScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  toggleMenu() {
    this.toggleSidebar.emit();
  }

  onSearch() {
    console.log('Search for:', this.searchQuery);
  }

  openCartDialog() {
    this.dialog.open(CartDialogue, {
      width: '500px',
      autoFocus: false,
      backdropClass: 'custom-dialog-backdrop',
      panelClass: 'custom-dialog-panel',
      data: {
        items: this.cartItems
      }
    });
  }

  increase(item: any) {
    this.cartService.updateQuantity(item.id, 1);
  }

  decrease(item: any) {
    this.cartService.updateQuantity(item.id, -1);
  }

  remove(item: any) {
    this.cartService.removeFromCart(item.id);
  }
}