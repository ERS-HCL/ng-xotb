import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignkitComponent } from './designkit.component';

describe('DesignkitComponent', () => {
  let component: DesignkitComponent;
  let fixture: ComponentFixture<DesignkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignkitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
