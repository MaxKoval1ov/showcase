import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFromComponent } from './add-from.component';

describe('AddFromComponent', () => {
  let component: AddFromComponent;
  let fixture: ComponentFixture<AddFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
