import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzeriaHomeComponent } from './pizzeria-home.component';

describe('PizzeriaHomeComponent', () => {
  let component: PizzeriaHomeComponent;
  let fixture: ComponentFixture<PizzeriaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PizzeriaHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzeriaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
