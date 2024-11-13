import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcomprasComponent } from './dashboardcompras.component';

describe('DashboardcomprasComponent', () => {
  let component: DashboardcomprasComponent;
  let fixture: ComponentFixture<DashboardcomprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardcomprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardcomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
