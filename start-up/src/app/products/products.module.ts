import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductItemComponent } from './product-item/product-item.component';
import { ProductComponent } from './product/product.component';
import { LoaderComponent } from './loader/loader.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatAccordion} from '@angular/material/expansion';
import {MatExpansionModule} from '@angular/material/expansion';

export const productRoute: Routes = [
  { path: '', component: ProductComponent}
]

@NgModule({
  declarations: [
    ProductItemComponent,
    ProductComponent,
    LoaderComponent,
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(productRoute),
    MatToolbarModule,
    MatTabsModule,
    MatSliderModule,
    MatSidenavModule,
    MatInputModule,
    MatIconModule,
    // MatAccordion,
    MatExpansionModule
  ]
})
export class ProductsModule { }
