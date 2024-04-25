import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-arrow-left',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrow-left.component.html',
  styleUrl: './arrow-left.component.scss'
})
export class ArrowLeftComponent {
  animate:boolean = false;
  animationOver = false;

  startAnimation() {
    this.animate ? this.animate = false : this.animate = true;
    setTimeout(() => {
      this.animationOver = true;
    },250)
  }
}
