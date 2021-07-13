import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products/services/products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private formB:FormBuilder, private service:ProductsService, private router:Router) { }
  productsForm: FormGroup ;
  

  ngOnInit(): void {
    this.productsForm = this.formB.group({
      name: [null, [Validators.required]],
      quantity: [0, [Validators.required]],
      description: [null],
      image: [null,[Validators.required]],
      stars: [0],
    })
  }
  submitForm(){
    this.service.addProduct(this.productsForm.value);
    this.router.navigate(['/admin']);
  }

}
