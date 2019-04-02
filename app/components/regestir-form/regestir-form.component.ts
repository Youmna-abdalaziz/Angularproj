import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validator,Validators } from '@angular/forms';

@Component({
  selector: 'app-regestir-form',
  templateUrl: './regestir-form.component.html',
  styleUrls: ['./regestir-form.component.scss']
})
export class RegestirFormComponent implements OnInit {
  public regestirForm = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',Validators.required)
  })

  constructor() { }
  regestir() {
    alert("You regestired");
  }

  ngOnInit() {
  }

}
