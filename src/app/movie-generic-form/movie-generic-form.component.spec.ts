import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGenericFormComponent } from './movie-generic-form.component';

describe('MovieGenericFormComponent', () => {
  let component: MovieGenericFormComponent;
  let fixture: ComponentFixture<MovieGenericFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieGenericFormComponent]
    });
    fixture = TestBed.createComponent(MovieGenericFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
