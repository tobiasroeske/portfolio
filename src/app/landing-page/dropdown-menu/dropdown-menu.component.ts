import { Component, inject } from '@angular/core';
import { HeaderServiceService } from '../../shared/services/header-service/header-service.service';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss'
})
export class DropdownMenuComponent {
  headerDropDownService = inject(HeaderServiceService);
  animate:boolean = false;
  startAnimation() {
    this.animate = true;
  }

  stopAnimation() {
    this.animate = false;
  }

  closeDropDownMenu() {
    this.headerDropDownService.headerDropDownState$.next(false);
  }
}
