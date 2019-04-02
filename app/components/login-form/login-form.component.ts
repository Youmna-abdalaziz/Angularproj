import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validator,Validators } from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loginForm = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    password: new FormControl('',Validators.required)
  })


  constructor() { }
  login() {
    alert("You Loggedin");
  }

  ngOnInit() {
  }

}
