import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private email: string;
  private password: string;

  loginForm = new FormGroup({
    email: new FormControl(this.email, Validators.required),
    password: new FormControl(this.password, Validators.required)
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm);
  }

}
