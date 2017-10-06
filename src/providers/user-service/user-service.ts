import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SingletonProvider } from '../singleton/singleton';

@Injectable()
export class UserServiceProvider {

  constructor(public http: Http) {
    console.log('Hello UserServiceProvider Provider');
  }

  login(singleton : SingletonProvider, username, password) {
    return new Promise(resolve => {
      singleton.apiRequest("auth/login.php", [
        "username",
        "password"
      ], [
        username,
        password
      ]).then(res => {
        var data = res[0].data;
        console.log("Login response", data);
      })
    });
  }

  register(singleton : SingletonProvider, username, password, firstName, lastName, car, address) {
    return new Promise(resolve => {

    });
  }

}
