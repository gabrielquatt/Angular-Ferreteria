import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerreteriaAboutComponent } from './ferreteria-about.component';

describe('FerreteriaAboutComponent', () => {
  let component: FerreteriaAboutComponent;
  let fixture: ComponentFixture<FerreteriaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerreteriaAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FerreteriaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
