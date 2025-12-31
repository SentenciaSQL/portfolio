import {Component, inject} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {I18nService} from '../../../../core/i18n/i18n.service';

@Component({
  standalone: true,
  selector: 'app-experience',
  imports: [MatCardModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  i18n = inject(I18nService);
}
