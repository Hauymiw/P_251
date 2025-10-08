import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoutDetailsComponent } from './accout-details.component';

describe('AccoutDetailsComponent', () => {
  let component: AccoutDetailsComponent;
  let fixture: ComponentFixture<AccoutDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccoutDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccoutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
