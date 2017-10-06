import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SingletonProvider } from '../../providers/singleton/singleton';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  VIEW_REGISTER = 0;
  VIEW_LOGIN = 1;
  view = this.VIEW_REGISTER;

  error_text = "";

  nUsername = "";
  nFirstName = "";
  nLastName = "";
  nEmail = "";
  nPassword = "";
  nConfirmPassword = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public singleton : SingletonProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  onClickSwitch(view) {
    this.view = view;
  }

  onClickLogin() {
    
  }

  //still have to protect data
  onClickRegister() {
    console.log("Register clicked", [this.nUsername, this.nFirstName, this.nLastName, this.nEmail, this.nPassword, this.nConfirmPassword]);
    this.singleton.createLoader("Registering");
    if(this.nUsername.length >= 3 && this.nUsername.length <= 15) {
      if(this.nFirstName.length > 0 && this.nLastName.length > 0) {
        if(this.nEmail.indexOf("@") > 0 && this.nEmail.indexOf(".") > 0) {
          if(this.nPassword.length >= 4) {
            if(this.nPassword == this.nConfirmPassword) {
              this.singleton.us.register(this.singleton, this.nUsername, this.nPassword, this.nEmail, this.nFirstName, this.nLastName, undefined, undefined).then(res => {
                this.singleton.destroyLoader();
                if(res[0].status) {
                  
                } else {
                  switch(res[0].error) {
                    case "exists_error":
                    this.error_text = "Sorry, that username is taken!";
                      break;
                    case "insert_error":
                      this.error_text = "Encountered an issue, please try again later!";
                      break;
                  }
                }
              });
            } else {
              this.error_text = "Passwords do not match";
            }
          } else {
            this.error_text = "Password must be at least 4 characters";
          }
        } else {
          this.error_text = "Email is invalid";
        }
      } else {
        this.error_text = "Name is invalid";
      }
    } else {
      this.error_text = "Username must be between 3 and 15 characters";
    }
  }

}
