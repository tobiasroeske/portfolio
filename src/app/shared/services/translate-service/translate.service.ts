import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  stateOfTranslation$ = new Subject();
  translated:boolean = false;

  constructor() {
    this.stateOfTranslation$.subscribe((value) => {
      this.translated = !this.translated;
      console.log(this.translated);
      
    })
   }
}
