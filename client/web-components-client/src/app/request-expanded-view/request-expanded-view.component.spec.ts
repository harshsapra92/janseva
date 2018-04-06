import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestExpandedViewComponent } from './request-expanded-view.component';

describe('RequestExpandedViewComponent', () => {
  let component: RequestExpandedViewComponent;
  let fixture: ComponentFixture<RequestExpandedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestExpandedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestExpandedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
