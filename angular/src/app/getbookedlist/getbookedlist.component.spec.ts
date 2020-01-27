import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbookedlistComponent } from './getbookedlist.component';

describe('GetbookedlistComponent', () => {
  let component: GetbookedlistComponent;
  let fixture: ComponentFixture<GetbookedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetbookedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbookedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
