import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegestirFormComponent } from './regestir-form.component';

describe('RegestirFormComponent', () => {
  let component: RegestirFormComponent;
  let fixture: ComponentFixture<RegestirFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegestirFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegestirFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
