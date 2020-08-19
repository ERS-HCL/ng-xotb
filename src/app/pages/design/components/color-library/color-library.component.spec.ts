import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorLibraryComponent } from './color-library.component';

describe('ColorLibraryComponent', () => {
  let component: ColorLibraryComponent;
  let fixture: ComponentFixture<ColorLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
