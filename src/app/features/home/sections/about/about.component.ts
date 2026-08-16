import {Component, inject} from '@angular/core';
import {I18nService} from '../../../../core/i18n/i18n.service';
import {RevealDirective} from '../../../../shared/reveal/reveal.directive';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  readonly i18n = inject(I18nService);
  readonly stats = ['years', 'focus', 'location', 'english'] as const;
}
