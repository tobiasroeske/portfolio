import { Component, Input, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { Project } from '../../interfaces/project.interface';
import { CommonModule } from '@angular/common';
import { TranslateService } from '../../shared/services/translate-service/translate.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  translateService = inject(TranslateService);
  projects: Project[] = [
    {
      name: 'Join',
      technologies: 'React | TypeScript | Firebase | Git',
      img_path: 'screenshot_join.png',
      description: 'Einfaches Kanban-Tool für Projektmanagement. Erstelle, organisiere und verwalte Aufgaben auf einem übersichtlichen Board und verschiebe sie per Drag & Drop.',
      description_english: 'Simple Kanban tool for project management. Create, organize, and manage tasks on a clear board and move them with drag & drop.',
      github: 'https://github.com/tobiasroeske/react-join',
      project: 'https://join.tobias-roeske.ch',
    },
    {
      name: 'DABubble',
      technologies: 'Angular | Firebase | SCSS | TypeScript',
      img_path: 'screenshot_dabubble.png',
      description: 'Ein funktionsreicher Messenger, inspiriert von Slack, der durch die Leistungsfähigkeit von Firebase unterstützt wird, um eine sichere Nutzeranmeldung und eine zuverlässige Echtzeit-Datenbank zu gewährleisten.',
      description_english: 'A feature-rich messenger inspired by Slack, powered by Firebase to ensure secure user authentication and a reliable real-time database.',
      github: 'https://github.com/tobiasroeske/da-bubble',
      project: 'https://dabubble.tobias-roeske.ch',
    },
    {
      name: 'Sharkie',
      technologies: 'JavaScript | HTML | CSS',
      img_path: 'screenshot_sharkie.png',
      description: 'Erlebe mit Sharkie, dem Hai, ein actiongeladenes Jump-and-Run-Spiel! Besiege Quallen, Kugelfische und einen Killerwal in diesem auf OOP basierten Abenteuer.',
      description_english: 'Experience an action-packed jump-and-run game with Sharkie the shark! Defeat jellyfish, pufferfish, and a killer whale in this OOP-based adventure.',
      github: 'https://github.com/tobiasroeske/sharkie',
      project: 'https://sharkie.tobias-roeske.ch'
    }
  ]
}
