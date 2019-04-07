import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validator,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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


  constructor(private router: Router, private route: ActivatedRoute) {
  }

  login() {
    
    console.log(this.loginForm.value);
    var retrievedUser = localStorage.getItem(this.loginForm.value.userName);
    if(retrievedUser){
      var user=JSON.parse(retrievedUser);
      if(user.password==this.loginForm.value.password){
        alert("You Loggedin");
        this.router.navigate(['home']);

      }else{
        alert("You Entered Incorrect Password");
        location.reload();
      }
    }else{
      alert("Sorry You are not a Member, please Register first");
      this.router.navigate(['register']);
    }
    

  }

  ngOnInit() {
  }

}
