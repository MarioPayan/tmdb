/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CrewComponent } from './crew.component';

describe('CrewComponent', () => {
  let component: CrewComponent;
  let fixture: ComponentFixture<CrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
