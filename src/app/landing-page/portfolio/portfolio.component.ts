import { Component, Input } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { Project } from '../../interfaces/project.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      name: 'Join',
      technologies: 'JavaScript | HTML | CSS | Git | Scrum',
      img_path: 'screenshot_join.png',
      description: 'Einfaches Kanban-Tool für Projektmanagement. Erstelle, organisiere und verwalte Aufgaben auf einem übersichtlichen Board und verschiebe sie per Drag & Drop.',
      github: '#',
      project: '#'
    },
    {
      name: 'Sharkie',
      technologies: 'JavaScript | HTML | CSS',
      img_path: 'screenshot_sharkie.png',
      description: 'Erlebe mit Sharkie, dem Hai, ein actiongeladenes Jump-and-Run-Spiel! Besiege Quallen, Kugelfische und einen Killerwal in diesem auf OOP basierten Abenteuer.',
      github: '#',
      project: '#'
    },
    {
      name: 'Pokedex',
      technologies: 'JavaScript | HTML | CSS | Bootstrap | REST-API',
      img_path: 'screenshot_pokedex.png',
      description: 'Dieses Projekt nutzt die PokeApi, um umfassende Informationen über Pokémon abzurufen. Mit Such- und Filterfunktionen kannst du gezielt nach Pokémon suchen und detaillierte Daten anzeigen lassen.',
      github: '#',
      project: '#'
    }
  ]
}
