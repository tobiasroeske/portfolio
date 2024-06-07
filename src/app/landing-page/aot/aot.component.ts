import { Component, inject } from '@angular/core';
import { TranslateService } from '../../shared/services/translate-service/translate.service';

@Component({
  selector: 'app-aot',
  standalone: true,
  imports: [],
  templateUrl: './aot.component.html',
  styleUrl: './aot.component.scss'
})
export class AotComponent {
translateService = inject(TranslateService);
}
