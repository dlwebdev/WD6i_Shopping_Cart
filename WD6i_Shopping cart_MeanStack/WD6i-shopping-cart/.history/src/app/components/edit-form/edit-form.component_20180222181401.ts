import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { ValidateService } from '../../services/validation/validate.service';
import { Product } from './../../product';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  constructor(
    private _productService: ProductService,
    private _validateService: ValidateService,
    private router: Router
  ) { }

  imagePath: String;
  title: String;
  description: String;
  price: Number;

  savedProduct: any = {
    imagePath: '',
    title: '',
    description: '',
    price: ''
  };
  selectedProduct: any = {};
  productStore: any = [];

  ngOnInit() {
  }

}
