import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { ContentLayoutComponent } from '../layout/content-layout/content-layout.component';
import { HeaderComponent } from '../layout/header/header.component';
import { CategoriesComponent } from '../layout/categories/categories.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CardComponent } from '../shared/card/card.component';
import { CartsComponent } from './carts/carts.component';


@NgModule({
  declarations: [
    ViewComponent,
    ContentLayoutComponent,
    HeaderComponent,
    CategoriesComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CardComponent,
    CartsComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    
  ]
})
export class ViewModule { }
