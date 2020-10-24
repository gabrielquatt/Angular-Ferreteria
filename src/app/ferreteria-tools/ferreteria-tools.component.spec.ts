import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerreteriaToolsComponent } from './ferreteria-tools.component';

describe('FerreteriaToolsComponent', () => {
  let component: FerreteriaToolsComponent;
  let fixture: ComponentFixture<FerreteriaToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerreteriaToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FerreteriaToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
