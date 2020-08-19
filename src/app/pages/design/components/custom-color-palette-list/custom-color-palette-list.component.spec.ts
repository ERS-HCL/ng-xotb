import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomColorPaletteListComponent } from './custom-color-palette-list.component';

describe('CustomColorPaletteListComponent', () => {
  let component: CustomColorPaletteListComponent;
  let fixture: ComponentFixture<CustomColorPaletteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomColorPaletteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomColorPaletteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
