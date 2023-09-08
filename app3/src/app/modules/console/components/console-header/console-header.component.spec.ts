import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleHeaderComponent } from './console-header.component';

describe('ConsoleHeaderComponent', () => {
  let component: ConsoleHeaderComponent;
  let fixture: ComponentFixture<ConsoleHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleHeaderComponent]
    });
    fixture = TestBed.createComponent(ConsoleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
