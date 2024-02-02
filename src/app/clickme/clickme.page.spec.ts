import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClickmePage } from './clickme.page';

describe('ClickmePage', () => {
  let component: ClickmePage;
  let fixture: ComponentFixture<ClickmePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClickmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
