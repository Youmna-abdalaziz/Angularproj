import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validator,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-regestir-form',
  templateUrl: './regestir-form.component.html',
  styleUrls: ['./regestir-form.component.scss']
})
export class RegestirFormComponent implements OnInit {
  public regestirForm = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required)
  })

  constructor(private router: Router) { }
  regestir() {
    console.log(this.regestirForm.value);
    var user={
      "userName":this.regestirForm.value.userName,
      "password":this.regestirForm.value.password
    }
    localStorage.setItem(user.userName,JSON.stringify(user));
    alert("You regestired");
  //this.stream.setUserName(this.regestirForm.value.firstName);
  this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
