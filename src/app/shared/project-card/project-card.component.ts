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

  initials = computed(() => {
    const name = this.content()?.name as string | undefined;
    if (!name) {
      return 'PR';
    }
    return name
      .split(/[\s-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part: string) => part[0])
      .join('')
      .toUpperCase();
  });

  tone = computed(() => {
    const id = this.project().id;
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
      hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
    }
    return hash % 4;
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
