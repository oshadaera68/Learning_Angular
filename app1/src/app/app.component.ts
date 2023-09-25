import {Component} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app1';


  constructor(private auth: AngularFireAuth) {
  }

  async trigger() {
    try {
      const data = await this.auth.signInWithPopup(new GoogleAuthProvider());
    }catch (e){
      console.log(e)
    }
  }
}
