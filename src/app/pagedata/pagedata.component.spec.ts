import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedataComponent } from './pagedata.component';

describe('PagedataComponent', () => {
  let component: PagedataComponent;
  let fixture: ComponentFixture<PagedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
