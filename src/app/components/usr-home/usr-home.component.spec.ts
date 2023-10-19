import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrHomeComponent } from './usr-home.component';

describe('UsrHomeComponent', () => {
  let component: UsrHomeComponent;
  let fixture: ComponentFixture<UsrHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsrHomeComponent]
    });
    fixture = TestBed.createComponent(UsrHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
