import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AotComponent } from './aot/aot.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, AotComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
