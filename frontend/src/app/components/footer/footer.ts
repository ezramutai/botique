import { Component } from '@angular/core';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, FontAwesomeModule, RouterLink], // <-- Add FontAwesomeModule here
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {
  currentYear = new Date().getFullYear();
  faStore = faStore;
}