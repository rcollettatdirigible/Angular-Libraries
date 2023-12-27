import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypewritterComponent } from './typewritter.component';

describe('TypewritterComponent', () => {
  let component: TypewritterComponent;
  let fixture: ComponentFixture<TypewritterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypewritterComponent]
    });
    fixture = TestBed.createComponent(TypewritterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
