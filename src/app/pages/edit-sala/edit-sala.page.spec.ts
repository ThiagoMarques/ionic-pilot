import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSalaPage } from './edit-sala.page';

describe('EditSalaPage', () => {
  let component: EditSalaPage;
  let fixture: ComponentFixture<EditSalaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSalaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
