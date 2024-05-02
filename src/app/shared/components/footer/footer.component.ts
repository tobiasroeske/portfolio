import { Component, inject } from '@angular/core';
import { TranslateService } from '../../services/translate-service/translate.service';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  translateService = inject(TranslateService);
  

  
}
