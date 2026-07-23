import {Component, computed, inject} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {I18nService} from '../../../../core/i18n/i18n.service';

@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  i18n = inject(I18nService);

  cmms = computed(() => this.i18n.dict().projects.items.cmms);
  blood = computed(() => this.i18n.dict().projects.items.blood);
  spa = computed(() => this.i18n.dict().projects.items.spa);
  learnkids = computed(() => this.i18n.dict().projects.items.learnKids);
  pagatodo = computed(() => this.i18n.dict().projects.items.pagatodo);
  teslShop = computed(() => this.i18n.dict().projects.items.tesloShop);
}
