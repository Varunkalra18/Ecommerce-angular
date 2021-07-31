import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { DetailProductComponent } from './detail-product/detail-product.component';


@NgModule({
  declarations: [
    ListProductsComponent,
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ProductsModule { }
