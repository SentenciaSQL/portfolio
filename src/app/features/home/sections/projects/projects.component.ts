import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { PROJECTS } from '../../../../core/projects/projects.data';
import { ProjectCardComponent } from '../../../../shared/project-card/project-card.component';

@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [RouterLink, MatButtonModule, MatIconModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  i18n = inject(I18nService);
  featuredProjects = PROJECTS.filter((project) => project.featured);
}
