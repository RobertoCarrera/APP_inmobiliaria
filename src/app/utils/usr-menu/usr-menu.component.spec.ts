import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrMenuComponent } from './usr-menu.component';

describe('UsrMenuComponent', () => {
  let component: UsrMenuComponent;
  let fixture: ComponentFixture<UsrMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsrMenuComponent]
    });
    fixture = TestBed.createComponent(UsrMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
