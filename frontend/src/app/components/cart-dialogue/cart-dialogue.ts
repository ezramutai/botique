import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart-dialogue',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './cart-dialogue.html',
  styleUrls: ['./cart-dialogue.css']
})
export class CartDialogue {
  constructor(
    public dialogRef: MatDialogRef<CartDialogue>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  increase(item: any) {
    item.quantity++;
  }

  decrease(item: any) {
    if (item.quantity > 1) item.quantity--;
  }

  remove(item: any) {
    const index = this.data.cartItems.indexOf(item);
    if (index !== -1) {
      this.data.cartItems.splice(index, 1);
    }
  }
}