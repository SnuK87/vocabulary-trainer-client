import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListheaderComponent } from './listheader.component';

describe('ListheaderComponent', () => {
  let component: ListheaderComponent;
  let fixture: ComponentFixture<ListheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
