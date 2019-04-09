import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Input('button') button: string;
  constructor() { }
  clicked() {
    this.submit.emit();
  }

  ngOnInit() {
  }

}
