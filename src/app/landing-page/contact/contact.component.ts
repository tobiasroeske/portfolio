import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  labelHidden:boolean = true;

  showLabel() {
    this.labelHidden = false;
  }

  hideLabel() {
    this.labelHidden = true;
  }

  stopPropagation(event:Event) {
    event.stopPropagation();
  }
}
