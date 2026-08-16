import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {I18nService} from '../../../../core/i18n/i18n.service';
import {HOME_PROJECT_IDS, PROJECTS} from '../../../../core/projects/projects.data';
import {SITE} from '../../../../core/site/site.constants';
import {IconComponent} from '../../../../shared/icon/icon.component';
import {ProjectCardComponent} from '../../../../shared/project-card/project-card.component';
import {RevealDirective} from '../../../../shared/reveal/reveal.directive';

@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [RouterLink, IconComponent, ProjectCardComponent, RevealDirective],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  readonly i18n = inject(I18nService);
  readonly site = SITE;
  readonly featuredProjects = HOME_PROJECT_IDS
    .map((id) => PROJECTS.find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof project> => !!project);
}
