import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  messageText = '';
  showToast = false;

  sendMessage() {
    if (!this.messageText.trim()) return;

    // Mock send
    this.showToast = true;

    // Hide toast after 3 seconds
    setTimeout(() => {
      this.showToast = false;
    }, 3000);

    // Reset form
    this.messageText = '';
  }
}