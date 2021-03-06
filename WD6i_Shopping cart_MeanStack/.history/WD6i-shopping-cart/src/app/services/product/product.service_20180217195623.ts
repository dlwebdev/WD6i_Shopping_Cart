import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './../../product';


@Injectable()
export class ProductService {

  private _getUrl = '/api/products';

  constructor(private _http: Http) { }

  getProducts() {
    console.log('I am in the getProducts function.');
    return this._http.get(this._getUrl)
    .map((response: Response) => response.json());
  }

}
