import {Component, computed, input, inject} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {I18nService} from '../../core/i18n/i18n.service';
import {ProjectMeta} from '../../core/projects/project.model';

@Component({
  standalone: true,
  selector: 'app-project-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  private i18n = inject(I18nService);

  project = input.required<ProjectMeta>();
  showStacks = input(true);

  content = computed(() => {
    const id = this.project().id;
    return this.i18n.dict().projects.items[id];
  });

  linkLabel(kind: string): string {
    const links = this.content()?.links;
    return links?.[kind] ?? kind;
  }
}
