import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomColorPaletteComponent } from './custom-color-palette.component';

describe('CustomColorPaletteComponent', () => {
  let component: CustomColorPaletteComponent;
  let fixture: ComponentFixture<CustomColorPaletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomColorPaletteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomColorPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
