import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiResourceComponent } from './wifi-resource.component';

describe('WifiResourceComponent', () => {
  let component: WifiResourceComponent;
  let fixture: ComponentFixture<WifiResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WifiResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WifiResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
