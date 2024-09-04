import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartAniPage } from './start-ani.page';

describe('StartAniPage', () => {
  let component: StartAniPage;
  let fixture: ComponentFixture<StartAniPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StartAniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
