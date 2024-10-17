import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    RouterLink,
    RouterModule,
    NavBarComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      id: '1',
      title: 'SIR Promotres',
      imageUrl:
        '/Users/filipeguedes/Desktop/practice-projects/WebCV/public/project_images/sp01.png',
      description: 'Description of SIR Promotres.',
    },
    {
      id: '2',
      title: 'Lisbon Prime Index',
      imageUrl: '',
      description: 'Description of Lisbon Prime Index.',
    },
    {
      id: '3',
      title: 'Revista',
      imageUrl: 'https://via.placeholder.com/400x250',
      description: 'Description of Revista.',
    },
  ];
}
