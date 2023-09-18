import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../shared/service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';


  constructor(private router: Router, private authService: AuthService) {
  }

  login(): void {
    if (this.email === 'h@gmail.com' && this.password === '1234') {
      this.authService.createToken(this.email)
      this.router.navigateByUrl('/console').then()
    } else {
      alert("Wrong Input")
    }
  }

  ngOnInit(): void {
    if (this.authService.isExistsToken('my-token')){
      this.router.navigateByUrl('/console').then()
    }
  }
}
