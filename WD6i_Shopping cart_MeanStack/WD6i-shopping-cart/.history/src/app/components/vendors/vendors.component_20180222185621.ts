import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ProductService } from '../../services/product/product.service';
import { Product } from './../../product';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  constructor(
    private _productService: ProductService
  ) { }

  imagePath: String;
  title: String;
  description: String;
  price: Number;

  products: any = [];
  selectedItem: any = {
    imagePath: '',
    title: '',
    description: '',
    price: ''
  };

  selectedProduct: any = {};
  productStore: any = [];


  ngOnInit() {
    this._productService.getProducts()
    .subscribe(Data => {
      this.products = Data;
      console.log(this.products);
    });
    console.log(this.products);
  }

  onSelectObject(item: any) {
    this.selectedProduct = item;
    console.log(this.selectedProduct);
  }

  onFormSubmit() {

  }

  SaveProduct(product: Product) {
    console.log("Click!!");
    this.savedProduct.imagePath = (<HTMLInputElement>document.getElementById('imagePath')).value;
    this.savedProduct.title = (<HTMLInputElement>document.getElementById('title')).value;
    this.savedProduct.description = (<HTMLInputElement>document.getElementById('description')).value;
    this.savedProduct.price = (<HTMLInputElement>document.getElementById('price')).value;

    // Pushing the savedProduct to my productStore array.
    console.log('Pushing up saved product of: ', this.savedProduct);

    // Calling addVideo from savedMediaService and passing it my productStore array.
    this._productService.saveProduct(this.savedProduct)
      .subscribe(resNewProduct => {
        this.savedProduct = resNewProduct;
    });
  }


  removeProduct(item: any) {
    console.log('Click!!', item._id);
    // Calling the removeProduct function from productService and passing item
    this._productService.removeProduct(item);
  }
}