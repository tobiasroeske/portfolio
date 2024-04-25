import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';


@Component({
  selector: 'app-arrow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrow.component.html',
  styleUrl: './arrow.component.scss', 
})
export class ArrowComponent {
  @Input() left:boolean = false;
  animate:boolean = false;
  animationOver = false;

  startAnimation() {
    this.animate ? this.animate = false : this.animate = true;
    setTimeout(() => {
      this.animationOver = true;
    },250)
  }
}

