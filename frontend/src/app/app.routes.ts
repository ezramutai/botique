import { Routes } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Home } from './components/home/home';
import { ProductList } from './components/product-list/product-list';
import { ProductDetail } from './components/product-detail/product-detail';
import { Contact } from './components/contact/contact';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: ProductList },
  { path: 'products/:id', component: ProductDetail },
  { path: 'contact', component: Contact },
  { path: '**', component: NotFound }
];