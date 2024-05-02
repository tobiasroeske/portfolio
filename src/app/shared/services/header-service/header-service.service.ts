import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {
  headerDropDownState$ = new Subject();
  headerAnimations$ = new Subject();
  stateOfDropDown = false;
  onOtherPage = false;
  closeIconAnimation:boolean = false;
  menuIconAnimation: boolean = false;

  constructor() {
    this.headerDropDownState$.subscribe(value => {
      this.stateOfDropDown = !this.stateOfDropDown;
    });
    this.headerAnimations$.subscribe(value => {
      this.closeIconAnimation = !this.closeIconAnimation;
    if (!this.closeIconAnimation) {
      this.menuIconAnimation = !this.menuIconAnimation;
      this.closeIconAnimation = !this.closeIconAnimation;
    }
    })

   }
}
