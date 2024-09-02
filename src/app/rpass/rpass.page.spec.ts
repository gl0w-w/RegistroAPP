import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RpassPage } from './rpass.page';

describe('RpassPage', () => {
  let component: RpassPage;
  let fixture: ComponentFixture<RpassPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
