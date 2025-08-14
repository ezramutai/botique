import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  {
    path: '', component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'products', component: Products }, // lowercase path is best practice
      { path: 'contact', component: Contact},
    ]
  },
  // Optional: Wildcard route for 404
  // { path: '**', redirectTo: '', pathMatch: 'full' }
];