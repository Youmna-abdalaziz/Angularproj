import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input('type') type: string;
  @Input('formcontrol') formcontrol: FormControl;
  @Input ('formcontrolname') formcontrolname : String;
  @Input('group') group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
