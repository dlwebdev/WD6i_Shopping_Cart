import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { SaveUserService } from '../../services/User/save-user.service';
import { ValidateService } from '../../services/validation/validate.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';

import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from './../../user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;

  errors: any = {};
  savedUser: any = {
    username: '',
    email: '',
    password: ''
  };
  userStore: any = [];

  constructor() { }

  ngOnInit() {
  }

  onRegisterSubmit() {

  }
}
