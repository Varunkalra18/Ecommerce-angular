import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from '../admin/list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    path:"",
    component:ListProductComponent
  },
  {
    path:"add-product",
    component:AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
