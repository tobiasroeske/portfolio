import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-arrow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrow.component.html',
  styleUrl: './arrow.component.scss'
})
export class ArrowComponent {
  animate:boolean = false;
  animationOver = false;

  startAnimation() {
    this.animate ? this.animate = false : this.animate = true;
    setTimeout(() => {
      this.animationOver = true;
    },250)
  }
}
