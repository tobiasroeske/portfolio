import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AotComponent } from './aot/aot.component';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, AotComponent, AboutMeComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
