import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfeHomePage } from './profe-home.page';

describe('ProfeHomePage', () => {
  let component: ProfeHomePage;
  let fixture: ComponentFixture<ProfeHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfeHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
