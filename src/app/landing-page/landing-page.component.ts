import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AotComponent } from './aot/aot.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ArrowComponent } from './arrow/arrow.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderServiceService } from '../shared/services/header-service/header-service.service';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';



@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, AotComponent, AboutMeComponent, ArrowComponent, MySkillsComponent, PortfolioComponent, DropdownMenuComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  headerDropDownService = inject(HeaderServiceService);
}
