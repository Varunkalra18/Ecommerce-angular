import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ProductsService} from '../services/products.service';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  constructor(private service : ProductsService,private activatedRoute: ActivatedRoute, private route : Router ) {}

  id: any = 0 ;
  productDescription : any = null;

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getProductDescription(parseInt(this.id)) ;
  }

  getProductDescription(id:number){
    this.productDescription = this.service.getProductD(this.id) ;
    console.log(this.productDescription);
  }
  goBack(){
    this.route.navigate([''])
  }
}
