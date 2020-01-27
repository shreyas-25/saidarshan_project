import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedslotsComponent } from './bookedslots.component';

describe('BookedslotsComponent', () => {
  let component: BookedslotsComponent;
  let fixture: ComponentFixture<BookedslotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedslotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedslotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
