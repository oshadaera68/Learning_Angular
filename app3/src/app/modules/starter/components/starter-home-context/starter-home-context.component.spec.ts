import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterHomeContextComponent } from './starter-home-context.component';

describe('StarterHomeContextComponent', () => {
  let component: StarterHomeContextComponent;
  let fixture: ComponentFixture<StarterHomeContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarterHomeContextComponent]
    });
    fixture = TestBed.createComponent(StarterHomeContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
