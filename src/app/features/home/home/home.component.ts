import {afterNextRender, Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroComponent} from '../sections/hero/hero.component';
import {AboutComponent} from '../sections/about/about.component';
import {ExperienceComponent} from '../sections/experience/experience.component';
import {StackComponent} from '../sections/stack/stack.component';
import {ProjectsComponent} from '../sections/projects/projects.component';
import {ContactComponent} from '../sections/contact/contact.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    StackComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private readonly route = inject(ActivatedRoute);

  constructor() {
    afterNextRender(() => {
      const fragment = this.route.snapshot.fragment;
      if (fragment) {
        document.getElementById(fragment)?.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  }
}
