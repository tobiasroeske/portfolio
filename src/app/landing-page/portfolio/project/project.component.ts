import { Component, Input, inject } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';
import { CommonModule } from '@angular/common';
import { TranslateService } from '../../../shared/services/translate-service/translate.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project!: Project;
  @Input() index!:number;
  @Input() amount!: number;
  @Input() reverse: boolean = false;
  
  translateService = inject(TranslateService);
}
