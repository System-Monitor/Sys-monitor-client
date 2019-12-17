import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuResourceComponent } from './cpu-resource.component';

describe('CpuResourceComponent', () => {
  let component: CpuResourceComponent;
  let fixture: ComponentFixture<CpuResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
