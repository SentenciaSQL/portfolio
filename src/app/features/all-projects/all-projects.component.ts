import {Component, computed, inject, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {I18nService} from '../../core/i18n/i18n.service';
import {PROJECTS} from '../../core/projects/projects.data';
import {STACK_FILTERS, StackFilter} from '../../core/projects/stacks';
import {ProjectCardComponent} from '../../shared/project-card/project-card.component';
import {IconComponent} from '../../shared/icon/icon.component';

@Component({
  standalone: true,
  selector: 'app-all-projects',
  imports: [RouterLink, ProjectCardComponent, IconComponent],
  templateUrl: './all-projects.component.html',
})
export class AllProjectsComponent {
  readonly i18n = inject(I18nService);
  readonly stacks = STACK_FILTERS;

  selectedStacks = signal<StackFilter[]>([]);

  filteredProjects = computed(() => {
    const selected = this.selectedStacks();
    if (selected.length === 0) {
      return PROJECTS;
    }

    return PROJECTS.filter((project) =>
      selected.some((stack) => project.stacks.includes(stack)),
    );
  });

  isSelected(stack: StackFilter): boolean {
    return this.selectedStacks().includes(stack);
  }

  toggleStack(stack: StackFilter): void {
    const current = this.selectedStacks();
    if (current.includes(stack)) {
      this.selectedStacks.set(current.filter((item) => item !== stack));
      return;
    }
    this.selectedStacks.set([...current, stack]);
  }

  clearFilters(): void {
    this.selectedStacks.set([]);
  }
}
