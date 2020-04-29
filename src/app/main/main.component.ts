import { Component, OnInit } from '@angular/core';
import { NgTestPackageService } from 'ng-test-package';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( private test: NgTestPackageService ) { }

  ngOnInit(): void {
    this.test.akshayprint()
  }

}
