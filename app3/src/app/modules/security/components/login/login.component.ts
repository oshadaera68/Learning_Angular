import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';


  constructor(private router: Router) {
  }

  login(): void {
    if (this.email === 'h@gmail.com' && this.password === '1234') {
      this.router.navigateByUrl('/console').then()
    } else {
      alert("Wrong Input")
    }
  }

  ngOnInit(): void {
  }
}
