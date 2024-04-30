import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HeaderServiceService } from '../../services/header-service/header-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  headerDropDownService = inject(HeaderServiceService);

  toggleDropDown() {
    this.headerDropDownService.headerDropDownState$.next(true);
  }
}
