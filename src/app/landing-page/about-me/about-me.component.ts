import { Component, inject } from '@angular/core';
import { TranslateService } from '../../shared/services/translate-service/translate.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  translateService = inject(TranslateService);
}
