import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardventasComponent } from './dashboardventas.component';

describe('DashboardventasComponent', () => {
  let component: DashboardventasComponent;
  let fixture: ComponentFixture<DashboardventasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardventasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
