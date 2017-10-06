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
        
        if(data.status) {
          singleton.username = username;
          singleton.password = password;
          singleton.email = data.email;
          singleton.firstName = data.firstName;
          singleton.lastName = data.lastName;
          singleton.authorized = true;
          resolve([{status: true}]);
        } else {
          resolve([{status: false, error: data.response}]);
        }
      })
    });
  }

  register(singleton : SingletonProvider, username, password, email, firstName, lastName, car, address) {
    return new Promise(resolve => {
      singleton.apiRequest("auth/register.php", [
        "username",
        "password",
        "email",
        "firstName",
        "lastName"
      ], [
        username,
        password,
        email,
        firstName,
        lastName
      ]).then(res => {
        var data = res[0].data;
        console.log("Register response", data);
        
        if(data.status) {
          singleton.username = username;
          singleton.password = password;
          singleton.email = email;
          singleton.firstName = firstName;
          singleton.lastName = lastName;
          singleton.authorized = true;
          resolve([{status: true}]);
        } else {
          resolve([{status: false, error: data.response}]);
        }
      })
    });
  }

}
