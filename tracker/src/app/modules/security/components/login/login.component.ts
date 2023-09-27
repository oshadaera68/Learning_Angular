import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {GoogleAuthProvider } from "firebase/auth";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private afa:AngularFireAuth) {
  }

  loginForm :FormGroup =new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required])
  });

  login(){
    console.log(this.loginForm.get('email')?.value)
    console.log(this.loginForm.get('password')?.value)
  }

  loginWithGoogle() {
    this.afa.signInWithPopup(new GoogleAuthProvider())
      .then(response=>{
        console.log(response)
      }).catch(error=>{
      console.log(error)
    })
  }
}
