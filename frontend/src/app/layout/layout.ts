import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Sidebar } from './sidebar/sidebar';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [Navbar, Sidebar, Footer, RouterOutlet],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {
  showSidebar = false;
}