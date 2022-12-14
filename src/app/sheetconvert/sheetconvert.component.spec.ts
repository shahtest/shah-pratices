import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetconvertComponent } from './sheetconvert.component';

describe('SheetconvertComponent', () => {
  let component: SheetconvertComponent;
  let fixture: ComponentFixture<SheetconvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheetconvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetconvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
