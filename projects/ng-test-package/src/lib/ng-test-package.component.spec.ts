import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTestPackageComponent } from './ng-test-package.component';

describe('NgTestPackageComponent', () => {
  let component: NgTestPackageComponent;
  let fixture: ComponentFixture<NgTestPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTestPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTestPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
