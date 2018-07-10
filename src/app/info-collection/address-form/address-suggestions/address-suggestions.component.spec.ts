import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSuggestionsComponent } from './address-suggestions.component';

describe('AddressSuggestionsComponent', () => {
  let component: AddressSuggestionsComponent;
  let fixture: ComponentFixture<AddressSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
