import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-NgTestPackage',
  template: `
    <p>
      ng-test-package works!
    </p>
  `,
  styles: [
  ]
})
export class NgTestPackageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
