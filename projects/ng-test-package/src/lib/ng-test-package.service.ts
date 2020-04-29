import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgTestPackageService {

  constructor() { }

  akshayprint(){
    console.log("Akshay it is working")
  }
}
