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
  onHover: boolean = false;

  skills = [
    {name: 'Angular', path: 'angular.png'},
    {name: 'TypeScript', path: 'ts.png'},
    {name: 'JavaScript', path: 'javascript.png'},
    {name: 'HTML', path: 'html.png'},
    {name: 'CSS', path: 'css.png'},
    {name: 'SCSS', path: 'sass.png'},
    {name: 'Firebase', path: 'firebase.png'},
    {name: 'Git', path: 'git.png'},
    {name: 'Scrum', path: 'scrum.png'},
    {name: 'Rest Api', path: 'api.png'},
    {name: 'Bootstrap', path: 'bootstrap.svg'},
    {name: 'Material Design', path: 'material_design.png'}
  ]
}
