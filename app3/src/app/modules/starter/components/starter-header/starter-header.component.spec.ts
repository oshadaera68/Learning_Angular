import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterHeaderComponent } from './starter-header.component';

describe('StarterHeaderComponent', () => {
  let component: StarterHeaderComponent;
  let fixture: ComponentFixture<StarterHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarterHeaderComponent]
    });
    fixture = TestBed.createComponent(StarterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
