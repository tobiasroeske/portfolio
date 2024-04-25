import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  animate:boolean = false;

  skills = [
    {name: 'Angular', path: 'angular.png', animate: false},
    {name: 'TypeScript', path: 'ts.png', animate: false},
    {name: 'JavaScript', path: 'javascript.png', animate: false},
    {name: 'HTML', path: 'html.png', animate: false},
    {name: 'CSS', path: 'css.png', animate: false},
    {name: 'SCSS', path: 'sass.png', animate: false},
    {name: 'Firebase', path: 'firebase.png', animate: false},
    {name: 'Git', path: 'git.png', animate: false},
    {name: 'Scrum', path: 'scrum.png', animate: false},
    {name: 'Rest Api', path: 'api.png', animate: false},
    {name: 'Bootstrap', path: 'bootstrap.svg', animate: false},
    {name: 'Material Design', path: 'material_design.png', animate: false}
  ]

  startAnimation(index:number) {
    this.skills[index].animate = true;
    setTimeout(() => {
      this.skills[index].animate = false;
    },500);
  }
}
