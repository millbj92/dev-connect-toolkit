import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcPanelContainerComponent } from './dc-panel-container.component';

describe('DcPanelContainerComponent', () => {
  let component: DcPanelContainerComponent;
  let fixture: ComponentFixture<DcPanelContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcPanelContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcPanelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
