import {Component, computed, inject, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {I18nService} from '../../core/i18n/i18n.service';
import {PROJECTS} from '../../core/projects/projects.data';
import {STACK_FILTERS, StackFilter} from '../../core/projects/stacks';
import {ProjectCardComponent} from '../../shared/project-card/project-card.component';

@Component({
  standalone: true,
  selector: 'app-all-projects',
  imports: [
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ProjectCardComponent,
  ],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.css',
})
export class AllProjectsComponent {
  i18n = inject(I18nService);

  readonly stacks = STACK_FILTERS;
  readonly year = new Date().getFullYear();

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
