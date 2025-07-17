import { Component } from '@angular/core';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Footer,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    FontAwesomeModule,
    
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  isMobile = false;
  isSidebarOpen = true;
  faStore = faStore;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
        this.isSidebarOpen = !this.isMobile;
      });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}