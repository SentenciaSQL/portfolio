import {Component, inject} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {HeroComponent} from '../sections/hero/hero.component';
import {AboutComponent} from '../sections/about/about.component';
import {StackComponent} from '../sections/stack/stack.component';
import {ProjectsComponent} from '../sections/projects/projects.component';
import {ExperienceComponent} from '../sections/experience/experience.component';
import {ContactComponent} from '../sections/contact/contact.component';
import {I18nService} from '../../../core/i18n/i18n.service';
import {SecondaryTechComponent} from '../sections/secondary-tech/secondary-tech.component';
import {ArchitectureComponent} from '../sections/architecture/architecture.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, HeroComponent, AboutComponent, StackComponent, ProjectsComponent, ExperienceComponent, ContactComponent, SecondaryTechComponent, ArchitectureComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  i18n = inject(I18nService);
  year = new Date().getFullYear();

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
