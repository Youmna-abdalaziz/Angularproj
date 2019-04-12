import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
  constructor(private router: Router, private route: ActivatedRoute, private user: UserService) {
  }

  login() {

    if (this.loginForm.invalid) {
      return;
    }
    var retrievedUser = localStorage.getItem(this.loginForm.value.userName);
    if (retrievedUser) {
      var user = JSON.parse(retrievedUser);
      if (user.password == this.loginForm.value.password) {
        alert("You Loggedin");
        this.router.navigate(['home']);
        this.user.setName(this.loginForm.value.userName);
        localStorage.setItem("currentUser", JSON.stringify(this.loginForm.value.userName));
      } else {
        alert("You Entered Incorrect Password");
        //location.reload();
        this.loginForm.reset();
      }
    } else {
      alert("Sorry You are not a Member, please Register first");
      this.router.navigate(['register']);
    }


  }

  ngOnInit() {
  }

}
