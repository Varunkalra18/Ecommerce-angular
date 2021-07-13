import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecom';
  constructor(private router:Router){}
  adminPannel(){
    this.router.navigate(["/admin"]);
  }
  productPannel(){
    this.router.navigate([""]);
  }
  addProduct(){
    this.router.navigate(["/admin/add-product"]);
  }
}
