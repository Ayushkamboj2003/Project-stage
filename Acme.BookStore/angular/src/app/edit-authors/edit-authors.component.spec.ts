import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAuthorsComponent } from './edit-authors.component';

describe('EditAuthorsComponent', () => {
  let component: EditAuthorsComponent;
  let fixture: ComponentFixture<EditAuthorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAuthorsComponent]
    });
    fixture = TestBed.createComponent(EditAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
