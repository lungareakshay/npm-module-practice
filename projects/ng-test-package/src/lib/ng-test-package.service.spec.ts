import { TestBed } from '@angular/core/testing';

import { NgTestPackageService } from './ng-test-package.service';

describe('NgTestPackageService', () => {
  let service: NgTestPackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTestPackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
