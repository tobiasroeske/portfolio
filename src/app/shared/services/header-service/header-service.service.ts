import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {
  headerDropDownState$ = new Subject();
  stateOfDropDown = false;

  constructor() {
    this.headerDropDownState$.subscribe(value => {
      this.stateOfDropDown = !this.stateOfDropDown;
    })
   }
}
