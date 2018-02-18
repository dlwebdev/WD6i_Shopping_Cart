import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './../../product';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

  private _getUrl = '/api/products';

  constructor(private http:Http) { }
  // Uses http.get() to load a single JSON file
  getFoods() {
    return this.http.get('/api/pro').map((res:Response) => res.json());
  }

}
