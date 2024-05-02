import { Component, inject } from '@angular/core';
import { TranslateService } from '../shared/services/translate-service/translate.service';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
  translationService = inject(TranslateService);
  

}
