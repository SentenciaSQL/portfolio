import {Component, inject} from '@angular/core';
import {EXPERIENCE} from '../../../../core/experience/experience.data';
import {I18nService} from '../../../../core/i18n/i18n.service';
import {RevealDirective} from '../../../../shared/reveal/reveal.directive';

@Component({
  standalone: true,
  selector: 'app-experience',
  imports: [RevealDirective],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  readonly i18n = inject(I18nService);
  readonly roles = EXPERIENCE;
}
