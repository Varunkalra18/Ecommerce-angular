import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }
  private url = environment.apiUrl ;
  private extractData(res: Response) : Response | null{
    const body = res ;
    return body || null ;
  }
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
  getProductList():Observable<any>{
    return this.http
    .get(this.url + '/getProductList')
    .pipe(map(this.extractData))
    .pipe(catchError(this.handleError));
  }

  getProductD(id:number):Observable<any>{
    return this.http
    .get(this.url + '/getProductDetails/' +id)
    .pipe(map(this.extractData))
    .pipe(catchError(this.handleError));
  }
  deleteItems(id:number):Observable<any>{
    return this.http
    .get(this.url + '/deleteProduct/' +id)
    .pipe(map(this.extractData))
    .pipe(catchError(this.handleError));
  }

incProductQuant(id:number):Observable<any>{
  return this.http
  .get(this.url + '/increaseProductQuant/' +id)
  .pipe(map(this.extractData))
  .pipe(catchError(this.handleError));
}
decProductQuant(id:number):Observable<any>{
  return this.http
  .get(this.url + '/decreaseProductQuant/' +id)
  .pipe(map(this.extractData))
  .pipe(catchError(this.handleError));
}
addProduct(product){
  product.id = this.productList.length + 1 ;
  this.productList.push(product);
}
handleError(error): Observable<never>{
  return throwError(error);
};

}
