import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  private productList = [
    {
      id:1,
      name:"Product1",
      quantity:9,
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XFuRxfYf0ZhWQ3TTf6xz6hRqy9krvt9xCTWLBDIWI1PXNjJ040KiOqAf8_rKqd7F9mw&usqp=CAU",
      stars:"40"
    },
    {
      id:2,
      name:"Product2",
      quantity:10,
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XFuRxfYf0ZhWQ3TTf6xz6hRqy9krvt9xCTWLBDIWI1PXNjJ040KiOqAf8_rKqd7F9mw&usqp=CAU",
      stars:"40"
    }
  ] 
  getProductList():any{
    return this.productList;
  }
  getProductD(id:number):any {
    return this.productList.find(element => element.id == id) ;
  }
deleteItems(id:number){
  const index = this.productList.findIndex(element => element.id === id) ;
  this.productList.splice(index,1) ;
}
incProductQuant(id:number){
  const index = this.productList.findIndex(element => element.id === id) ;
  this.productList[index].quantity += 1 ;
}
decProductQuant(id:number){
  const index = this.productList.findIndex(element => element.id === id) ;
  this.productList[index].quantity -= 1 ;
}
addProduct(product){
  product.id = this.productList.length + 1 ;
  this.productList.push(product);
}
}
