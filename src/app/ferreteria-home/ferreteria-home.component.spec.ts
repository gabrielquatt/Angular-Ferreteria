import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerreteriaHomeComponent } from './ferreteria-home.component';

describe('FerreteriaHomeComponent', () => {
  let component: FerreteriaHomeComponent;
  let fixture: ComponentFixture<FerreteriaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerreteriaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FerreteriaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
