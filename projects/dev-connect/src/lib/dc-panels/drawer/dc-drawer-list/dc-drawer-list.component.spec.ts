import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcDrawerListComponent } from './dc-drawer-list.component';

describe('DcDrawerListComponent', () => {
  let component: DcDrawerListComponent;
  let fixture: ComponentFixture<DcDrawerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcDrawerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcDrawerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
