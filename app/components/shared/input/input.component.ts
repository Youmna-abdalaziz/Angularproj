import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input('type') type: string;
  @Input('name') name: string;
  //@Input('formcontrol') formcontrol: FormControl;
  @Input ('formcontrolname') formcontrolname : FormControl;
  @Input('group') group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
