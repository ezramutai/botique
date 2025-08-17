import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cart-dialogue',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './cart-dialogue.html',
  styleUrls: ['./cart-dialogue.css']
})
export class CartDialogue {
  displayedColumns: string[] = ['image', 'name', 'price', 'quantity', 'total', 'actions'];
  dataSource: MatTableDataSource<any>;

  constructor(
    public dialogRef: MatDialogRef<CartDialogue>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Initialize the table datasource with cart items
    this.dataSource = new MatTableDataSource(this.data.cartItems);
  }

  close(): void {
    this.dialogRef.close(this.dataSource.data); // return updated cart
  }

  increase(item: any) {
    item.quantity++;
    this.refreshTable();
  }

  decrease(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.refreshTable();
    }
  }

  remove(item: any) {
    const index = this.dataSource.data.indexOf(item);
    if (index !== -1) {
      this.dataSource.data.splice(index, 1);
      this.refreshTable();
    }
  }

  getTotal(): number {
    return this.dataSource.data
      .map(item => item.newPrice * item.quantity)
      .reduce((acc, value) => acc + value, 0);
  }

  private refreshTable() {
    // Reassign the array so Angular Material table picks up changes
    this.dataSource.data = [...this.dataSource.data];
  }
}