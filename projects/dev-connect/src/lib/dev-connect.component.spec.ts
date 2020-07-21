import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevConnectComponent } from './dev-connect.component';

describe('DevConnectComponent', () => {
  let component: DevConnectComponent;
  let fixture: ComponentFixture<DevConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
