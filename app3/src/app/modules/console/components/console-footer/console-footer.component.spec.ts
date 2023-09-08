import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleFooterComponent } from './console-footer.component';

describe('ConsoleFooterComponent', () => {
  let component: ConsoleFooterComponent;
  let fixture: ComponentFixture<ConsoleFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleFooterComponent]
    });
    fixture = TestBed.createComponent(ConsoleFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
