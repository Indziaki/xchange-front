import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProfileTagsDirective } from '../../directives/profile-tags/profile-tags.directive';
import { ProjectProgressBarModule } from '@indziaki/ngx-xchange-ui';
import { NgFor, NgIf } from '@angular/common';
import { CardStylesDirective } from '../../directives/card-styles/card-styles.directive';
import { ProjectModalComponent } from 'src/app/pages/projects/project-modal/project-modal.component';
import { XcIconCloseSComponent } from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'xc-projects-card',
  standalone: true,
  imports: [ProfileTagsDirective, ProjectProgressBarModule, NgFor, CardStylesDirective,NgIf,ProjectModalComponent,XcIconCloseSComponent],
  templateUrl: './projects-card.component.html',
  styleUrl: './projects-card.component.css'
})
export class ProjectsCardComponent {
  @Input() metrics: boolean = true;
  @Input() objectives: boolean = true;
  @Output() projectClick = new EventEmitter<any>();

  public projects = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIuKHHeS7DE9kplbdGaHTZlQL92-_x8j4Bw&s",
      title: "Project A",
      completed: 20,
      open: 10,
      suggested: 2,
      objectivesInProject:26,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Health", "Entrepreneur"],
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIuKHHeS7DE9kplbdGaHTZlQL92-_x8j4Bw&s",
      title: "Project B",
      completed: 50,
      open: 20,
      objectivesInProject:60,
      suggested: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Health", "Entrepreneur"],
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIuKHHeS7DE9kplbdGaHTZlQL92-_x8j4Bw&s",
      title: "Project C",
      completed: 80,
      open: 30,
      suggested: 10,
      objectivesInProject:30,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Health", "Entrepreneur"],
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIuKHHeS7DE9kplbdGaHTZlQL92-_x8j4Bw&s",
      title: "Project A",
      completed: 20,
      open: 10,
      suggested: 2,
      objectivesInProject:26,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Health", "Entrepreneur"],
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIuKHHeS7DE9kplbdGaHTZlQL92-_x8j4Bw&s",
      title: "Project B",
      completed: 50,
      open: 20,
      suggested: 5,
      objectivesInProject:78,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Health", "Entrepreneur"],
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIuKHHeS7DE9kplbdGaHTZlQL92-_x8j4Bw&s",
      title: "Project C",
      completed: 80,
      open: 30,
      suggested: 10,
      objectivesInProject:98,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Health", "Entrepreneur"],
    }
  ]

  selectedProject: any = null;

  openModal(project: any) {
    this.selectedProject = project;
  }

  onCloseModal() {
    this.selectedProject = null;
  }
}
