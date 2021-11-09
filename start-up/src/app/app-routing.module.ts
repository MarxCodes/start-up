import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // { path: 'products', loadChildren: './products/products.module#ProductsModule'}
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)}
  // { path: 'products', loadChildren: 'start-up/src/app/products/products.module'}

  // {path: 'home', component: HomeComponent, data: { animation: 'homePage'}},


  // .ts
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
