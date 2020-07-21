import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcDrawerListItemComponent } from './dc-drawer-list-item.component';

describe('DcDrawerListItemComponent', () => {
  let component: DcDrawerListItemComponent;
  let fixture: ComponentFixture<DcDrawerListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcDrawerListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcDrawerListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
