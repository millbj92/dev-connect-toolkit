import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcPanelContentComponent } from './dc-panel-content.component';

describe('DcPanelContentComponent', () => {
  let component: DcPanelContentComponent;
  let fixture: ComponentFixture<DcPanelContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcPanelContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcPanelContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
