import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

import { SingletonProvider } from '../../providers/singleton/singleton';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  @ViewChild(Content) content: Content;

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

  onClickLogout() {
    
  }

  //accept login or email?
  onClickLogin() {
    console.log("Login clicked", [this.nUsername, this.nPassword]);
    this.singleton.createLoader("Logging In");
    if(this.nUsername.length >= 3 && this.nUsername.length <= 15) {
      if(this.nPassword.length >= 4) {
        this.singleton.us.login(this.singleton, this.nUsername.toLowerCase(), this.nPassword).then(res => {
          this.singleton.destroyLoader();
          if(res[0].status) {
            this.content.resize();
          } else {
            switch(res[0].error) {
              case "dne_error":
                this.error_text = "Username and/or password is incorrect";
                break;
              case "password_error":
                this.error_text = "Username and/or password is incorrect";
                break;
            }
          }
        });
      } else {
        this.singleton.destroyLoader();
        this.error_text = "Username and/or password is incorrect";
      }
    } else {
      this.singleton.destroyLoader();
      this.error_text = "Username and/or password is incorrect";
    }
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
              this.singleton.us.register(this.singleton, this.nUsername.toLowerCase(), this.nPassword, this.nEmail, this.nFirstName, this.nLastName, undefined, undefined).then(res => {
                this.singleton.destroyLoader();
                if(res[0].status) {
                  this.content.resize();
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

  onClickEditPassword() {
    this.singleton.createPromptAlert("Current Password", "password", "password", "password").then(res => {
      var cPassword = res[0];
      if(cPassword == this.singleton.password) {
        this.singleton.createPromptAlert("New Password", "password", "password", "password").then(res => {
          var nPassword = res[0];
          if(nPassword.length >= 4) {
            this.singleton.createPromptAlert("Confirm Password", "password", "password", "password").then(res => {
              if(res[0] == nPassword) {
                this.singleton.apiRequest(
                  "auth/changePassword.php",
                  [
                    "username",
                    "password",
                    "newpassword"
                  ],
                  [
                    this.singleton.username,
                    this.singleton.password,
                    nPassword
                  ]
                ).then(res => {
                  var data = res[0].data;
                  if(data.status) {
                    this.singleton.password = data.password;
                    this.singleton.sendToast("Password updated!");
                  } else {
                    this.singleton.sendToast("Error changing password!");
                  }
                });
              } else {
                this.singleton.sendToast("Password didn't match!");
              }
            })
          } else {
            this.singleton.sendToast("Password too short!");
          }
        })
      } else {
        this.singleton.sendToast("Incorrect password!");
      }
    })
  }

  onClickEditFirstName() {

  }

  onClickEditLastName() {

  }

  onClickEditEmail() {

  }

}
