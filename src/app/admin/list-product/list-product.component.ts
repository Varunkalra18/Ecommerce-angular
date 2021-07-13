import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' ;
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  constructor(private service:ProductsService, private router:Router) { }
  productList:any = null ;
  search: string = "" ;
  filteredProductList = null;
  ngOnInit(): void {
    this.productList = this.service.getProductList() ;
    this.filteredProductList = this.productList ;
  }
  getToList():void{
    this.router.navigate(['']) ;
  }
  filterProduct():void {
    this.filteredProductList = this.productList.filter((element:any) =>element.name.includes( this.search)) ;
  }
  clear():void{
    this.filteredProductList = this.productList;
  }
  deleteProduct(item:any){
    this.service.deleteItems(item.id) ;
  } 
  incQuantity(item:any){
    this.service.incProductQuant(item.id) ;
  } 
  decQuantity(item:any){
    this.service.decProductQuant(item.id);
  } 
}
