import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstuHomePage } from './estu-home.page';

describe('EstuHomePage', () => {
  let component: EstuHomePage;
  let fixture: ComponentFixture<EstuHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstuHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
