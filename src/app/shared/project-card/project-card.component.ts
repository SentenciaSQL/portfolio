import {Component, computed, inject, input} from '@angular/core';
import {I18nService} from '../../core/i18n/i18n.service';
import {ProjectMeta} from '../../core/projects/project.model';
import {IconComponent} from '../icon/icon.component';

@Component({
  standalone: true,
  selector: 'app-project-card',
  imports: [IconComponent],
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  private readonly i18n = inject(I18nService);

  project = input.required<ProjectMeta>();
  compact = input(false);

  content = computed(() => {
    const id = this.project().id;
    return this.i18n.dict().projects.items[id];
  });

  badges = computed(() => {
    const stack = this.content()?.stack as string | undefined;
    if (stack) {
      return stack.split('·').map((item: string) => item.trim()).filter(Boolean);
    }
    return this.project().stacks;
  });

  bullets = computed(() => {
    const items = (this.content()?.bullets as string[] | undefined) ?? [];
    return this.compact() ? items.slice(0, 2) : items.slice(0, 3);
  });

  linkLabel(kind: string): string {
    const links = this.content()?.links;
    return links?.[kind] ?? kind;
  }
}
