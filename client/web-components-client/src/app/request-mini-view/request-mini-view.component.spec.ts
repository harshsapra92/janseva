import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMiniViewComponent } from './request-mini-view.component';

describe('RequestMiniViewComponent', () => {
  let component: RequestMiniViewComponent;
  let fixture: ComponentFixture<RequestMiniViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestMiniViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMiniViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
