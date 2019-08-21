import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalaPage } from './add-sala.page';

describe('AddSalaPage', () => {
  let component: AddSalaPage;
  let fixture: ComponentFixture<AddSalaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSalaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
