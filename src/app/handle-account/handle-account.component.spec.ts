import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleAccountComponent } from './handle-account.component';

describe('HandleAccountComponent', () => {
  let component: HandleAccountComponent;
  let fixture: ComponentFixture<HandleAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandleAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandleAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
