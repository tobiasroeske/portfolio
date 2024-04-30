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
      technologies: 'JavaScript | HTML | CSS | Git | Scrum',
      img_path: 'screenshot_join.png',
      description: 'Einfaches Kanban-Tool für Projektmanagement. Erstelle, organisiere und verwalte Aufgaben auf einem übersichtlichen Board und verschiebe sie per Drag & Drop.',
      description_english: 'Simple Kanban tool for project management. Create, organize, and manage tasks on a clear board and move them with drag & drop.',
      github: '#',
      project: 'https://join.tobias-roeske.ch'
    },
    {
      name: 'Sharkie',
      technologies: 'JavaScript | HTML | CSS',
      img_path: 'screenshot_sharkie.png',
      description: 'Erlebe mit Sharkie, dem Hai, ein actiongeladenes Jump-and-Run-Spiel! Besiege Quallen, Kugelfische und einen Killerwal in diesem auf OOP basierten Abenteuer.',
      description_english: 'Experience an action-packed jump-and-run game with Sharkie the shark! Defeat jellyfish, pufferfish, and a killer whale in this OOP-based adventure.',
      github: '#',
      project: 'https://sharkie.tobias-roeske.ch'
    },
    {
      name: 'Pokedex',
      technologies: 'JavaScript | HTML | CSS | Bootstrap | REST-API',
      img_path: 'screenshot_pokedex.png',
      description: 'Dieses Projekt nutzt die PokeApi, um umfassende Informationen über Pokémon abzurufen. Mit Such- und Filterfunktionen kannst du gezielt nach Pokémon suchen und detaillierte Daten anzeigen lassen.',
      description_english: 'This project utilizes the PokeAPI to retrieve comprehensive information about Pokémon. With search and filter functionalities, you can specifically search for Pokémon and display detailed data.',
      github: '#',
      project: 'https://pokedex.tobias-roeske.ch'
    }
  ]
}
