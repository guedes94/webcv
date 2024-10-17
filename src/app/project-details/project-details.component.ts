import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Features } from '../interfaces/features';
import { Project } from '../interfaces/project';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [RouterLink, CommonModule, NavBarComponent],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.project = this.getProjectById(projectId);
  }

  getProjectById(id: string | null): Project | undefined {
    const projects: Project[] = [
      {
        id: '1',
        title: 'SIR Promotres',
        mainImageUrl: 'assets/project_images/sp01.png',
        overviewImageUrl: 'assets/project_images/sir-promotores-overview.png', // Removido o prefixo /src
        overviewDescription:
          'SIR Promotres is a comprehensive platform designed for property management and promotion. This project involved complex integrations and a user-friendly interface.',
        features: [
          {
            title: 'Advanced Property Search',
            imageUrl: '', // Removido o prefixo /src
            description:
              'An advanced search feature with filters and sorting options.',
          },
          {
            title: 'User Dashboard',
            imageUrl: '', // Removido o prefixo /src
            description:
              'A dashboard providing users with insights and property management tools.',
          },
          {
            title: 'Interactive Map',
            imageUrl: '', // Removido o prefixo /src
            description:
              'An interactive map to visualize property locations and details.',
          },
          {
            title: 'Notifications & Alerts',
            imageUrl: '', // Removido o prefixo /src
            description:
              'Real-time notifications and alerts for property updates and user activities.',
          },
          {
            title: 'Analytics & Reporting',
            imageUrl: '', // Removido o prefixo /src
            description:
              'Comprehensive analytics and reporting tools for property metrics.',
          },
        ],
        technologies: ['Angular', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        results:
          'The project resulted in a successful launch with positive feedback from users, enhancing property management efficiency.',
      },
      // Outros projetos aqui...
    ];
    return projects.find((project) => project.id === id);
  }
}
