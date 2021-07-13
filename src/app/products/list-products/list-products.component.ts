import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';
import { Router } from '@angular/router' ;


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  constructor(private service:ProductsService,private router:Router) { }
  productList:any = null ;
  search: string = "" ;
  filteredProductList = null;
  ngOnInit(): void {
    this.productList = this.service.getProductList() ;
    this.filteredProductList = this.productList ;
  }
  getToDetails(id:number):void{
    this.router.navigate(['/product/'+id]) ;
  }
  filterProduct():void {
    this.filteredProductList = this.productList.filter((element:any) =>element.name.includes( this.search)) ;
  }
  clear():void{
    this.filteredProductList = this.productList;
  }
  
}
