import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceNavBarItemComponent } from './performance-nav-bar-item.component';

describe('PerformanceNavBarItemComponent', () => {
  let component: PerformanceNavBarItemComponent;
  let fixture: ComponentFixture<PerformanceNavBarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceNavBarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceNavBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
