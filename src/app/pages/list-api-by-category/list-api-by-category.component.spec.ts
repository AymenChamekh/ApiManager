import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApiByCategoryComponent } from './list-api-by-category.component';

describe('ListApiByCategoryComponent', () => {
  let component: ListApiByCategoryComponent;
  let fixture: ComponentFixture<ListApiByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListApiByCategoryComponent]
    });
    fixture = TestBed.createComponent(ListApiByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
