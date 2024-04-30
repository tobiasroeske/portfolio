import { Component, inject } from '@angular/core';
import { HeaderServiceService } from '../../shared/services/header-service/header-service.service';
import { TranslateService } from '../../shared/services/translate-service/translate.service';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss'
})
export class DropdownMenuComponent {
  headerDropDownService = inject(HeaderServiceService);
  translateService = inject(TranslateService);
  animate:boolean = false;
  

  closeDropDownMenu() {
    this.headerDropDownService.headerDropDownState$.next(false);
  }

  translatePage() {
    this.translateService.stateOfTranslation$.next(true);
  }
}
