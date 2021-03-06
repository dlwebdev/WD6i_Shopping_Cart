import { Injectable } from '@angular/core';
import { User } from './../../user';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if ( user.name === undefined || user.username === undefined || user.email === undefined || user.password === undefined ) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateLogin(user) {
    if ( user.username === undefined || user.password === undefined ) {
      console.log(user);
      return false;
    } else {
      return true;
    }
  }
}
