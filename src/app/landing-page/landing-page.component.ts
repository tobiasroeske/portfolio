import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AotComponent } from './aot/aot.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ArrowComponent } from './arrow/arrow.component';
import { MySkillsComponent } from './my-skills/my-skills.component';



@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, AotComponent, AboutMeComponent, ArrowComponent, MySkillsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  
}
