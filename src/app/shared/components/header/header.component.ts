import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { HeaderServiceService } from '../../services/header-service/header-service.service';
import { Router } from '@angular/router';
import { TranslateService } from '../../services/translate-service/translate.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  headerDropDownService = inject(HeaderServiceService);
  translateService = inject(TranslateService);
  router = inject(Router);
  pathName: string = window.location.pathname
  

  ngOnInit(): void {
    
    if (this.pathName == '/impressum' || this.pathName == '/datenschutz') {
      this.headerDropDownService.onOtherPage = true;
    }
  }

  toggleDropDown() {
    if (!this.headerDropDownService.stateOfDropDown) {
      window.scrollTo(0, 0);
    }
    this.headerDropDownService.headerDropDownState$.next(true);
  }

  toggleMenuIcon() {
    this.headerDropDownService.headerAnimations$.next(true);
  }

  goToLadingPage() {
    this.router.navigateByUrl('');
    this.headerDropDownService.onOtherPage = false;
  }

  toggleFlag() {
    this.translateService.stateOfTranslation$.next(true);
  }

  closePage() {
    window.close();
  }

}
