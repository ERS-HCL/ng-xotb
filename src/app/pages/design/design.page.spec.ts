import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPageComponent } from './design.page';

describe('DesignComponent', () => {
  let component: DesignPageComponent;
  let fixture: ComponentFixture<DesignPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DesignPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
