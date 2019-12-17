import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceNavBarComponent } from './performance-nav-bar.component';

describe('PerformanceNavBarComponent', () => {
  let component: PerformanceNavBarComponent;
  let fixture: ComponentFixture<PerformanceNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
