import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' ;
import { Observable } from 'rxjs';
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
    this.service.getProductList().subscribe(
      (data) => {
        console.log('deleted Successfully')
        this.productList = data ;
        this.filteredProductList = data ;
       },
      (error) => {
        console.log("er") ;
        console.log(error);
      }
    ) ;
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
    this.service.deleteItems(item.id).subscribe(
      (data) => {
        this.productList = data ;
        this.filteredProductList = data ;
      },
      (error) => {

      }
    ) ;
  } 
  incQuantity(item:any){
    this.service.incProductQuant(item.id).subscribe(
      (data) => {
        console.log('succtess');
        this.productList = data ;
        this.filteredProductList = data ; 
      },
      (error) => {

      }
    ) ;
  }
  decQuantity(item:any){
    this.service.decProductQuant(item.id).subscribe(
      (data) => {
        console.log('succtess full');
        this.productList = data ;
        this.filteredProductList = data ; 
      },
      (error) => {

      }
    ) ;
  } 
}
