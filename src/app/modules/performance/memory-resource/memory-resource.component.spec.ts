import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryResourceComponent } from './memory-resource.component';

describe('MemoryResourceComponent', () => {
  let component: MemoryResourceComponent;
  let fixture: ComponentFixture<MemoryResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
