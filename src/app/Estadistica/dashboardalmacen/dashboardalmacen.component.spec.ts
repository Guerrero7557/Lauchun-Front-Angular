import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardalmacenComponent } from './dashboardalmacen.component';

describe('DashboardalmacenComponent', () => {
  let component: DashboardalmacenComponent;
  let fixture: ComponentFixture<DashboardalmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardalmacenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardalmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
