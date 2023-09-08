import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterMainSliderComponent } from './starter-main-slider.component';

describe('StarterMainSliderComponent', () => {
  let component: StarterMainSliderComponent;
  let fixture: ComponentFixture<StarterMainSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarterMainSliderComponent]
    });
    fixture = TestBed.createComponent(StarterMainSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
