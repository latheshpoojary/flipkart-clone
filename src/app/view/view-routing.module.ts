import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
    children:[
      {
        path:'',
        redirectTo:'product-list',
        pathMatch:'full'
      },
      {
        path: 'product-list',
        component: ProductListComponent,
      },
      {
        path: 'product-details',
        component: ProductDetailsComponent,
      },
    ]
   
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule {}
